import axios, { AxiosInstance } from "axios";
import { Veiculo } from "@/model/Veiculo";
import { PageRequest } from "@/model/page/page-request";
import { PageResponse } from "@/model/page/page-response";
export class VeiculosClient {
  private axiosClient: AxiosInstance;

  constructor() {
    this.axiosClient = axios.create({
      baseURL: "http://localhost:8080/api/Veiculos",
      headers: { "Content-type": "application/json" },
    });
  }

  public async findById(id: number): Promise<Veiculo> {
    try {
      return (await this.axiosClient.get<Veiculo>(`/${id}`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async cadastrar(cadastrar: Veiculo): Promise<void> {
    try {
      return await this.axiosClient.post("/", cadastrar);
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async editar(editar: Veiculo): Promise<void> {
    try {
      return (await this.axiosClient.put(`/${editar.id}`, editar)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async desativar(deasativar: Veiculo): Promise<void> {
    try {
      return (await this.axiosClient.put(`/desativar/${deasativar.id}`, deasativar))
        .data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async findByFiltrosPaginado(
    pageRequest: PageRequest
  ): Promise<PageResponse<Veiculo>> {
    try {
      let requestPath = "";

      requestPath += `?page=${pageRequest.currentPage}`;
      requestPath += `&size=${pageRequest.pageSize}`;
      requestPath += `&sort=${
        pageRequest.sortField === undefined ? "" : pageRequest.sortField
      },${pageRequest.direction}`;

      return (
        await this.axiosClient.get<PageResponse<Veiculo>>(requestPath, {
          params: { filtros: pageRequest.filter },
        })
      ).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
}