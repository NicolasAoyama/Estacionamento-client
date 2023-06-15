import axios, { AxiosInstance } from "axios";
import { Movimentacao } from "@/model/Movimentacao"; 
import { PageRequest } from "@/model/page/page-request";
import { PageResponse } from "@/model/page/page-response";
export class MovinentacaoClient {
  private axiosClient: AxiosInstance;

  constructor() {
    this.axiosClient = axios.create({
      baseURL: "http://localhost:8080/api/movinentacao",
      headers: { "Content-type": "application/json" },
    });
  }

  public async findById(id: number): Promise<Movimentacao> {
    try {
      return (await this.axiosClient.get<Movimentacao>(`/${id}`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async cadastrar(cadastrar: Movimentacao): Promise<void> {
    try {
      return await this.axiosClient.post("/", cadastrar);
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async editar(editar: Movimentacao): Promise<void> {
    try {
      return (await this.axiosClient.put(`/${editar.id}`, editar)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async desativar(deasativar: Movimentacao): Promise<void> {
    try {
      return (await this.axiosClient.put(`/desativar/${deasativar.id}`, deasativar))
        .data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async findByFiltrosPaginado(
    pageRequest: PageRequest
  ): Promise<PageResponse<Movimentacao>> {
    try {
      let requestPath = "";

      requestPath += `?page=${pageRequest.currentPage}`;
      requestPath += `&size=${pageRequest.pageSize}`;
      requestPath += `&sort=${
        pageRequest.sortField === undefined ? "" : pageRequest.sortField
      },${pageRequest.direction}`;

      return (
        await this.axiosClient.get<PageResponse<Movimentacao>>(requestPath, {
          params: { filtros: pageRequest.filter },
        })
      ).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
}