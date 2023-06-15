import axios, { AxiosInstance } from "axios";
import { Modelo } from "@/model/Modelo";
import { PageRequest } from "@/model/page/page-request";
import { PageResponse } from "@/model/page/page-response";
export class ModeloClient {
  private axiosClient: AxiosInstance;

  constructor() {
    this.axiosClient = axios.create({
      baseURL: "http://localhost:8080/api/modelo",
      headers: { "Content-type": "application/json" },
    });
  }
  public async findById(): Promise<Modelo>{
    try{
        return (await this.axiosClient.get<Modelo>(`/id`)).data;
    } catch (error: any){
        return Promise.reject(error.response);
    }
  }
  public async cadastrar(modelo: Modelo): Promise<void> {
    try {
        return await this.axiosClient.post("/", modelo);
    } catch (error: any){
        return Promise.reject(error.response);
    }
  }
  public async editar(modelo: Modelo): Promise<void>{
    try {
        return (await this.axiosClient.put(`/${modelo.id}`, modelo)).data;
    } catch(error: any){
        return Promise.reject(error.response);
    }
  }
  public async desativar(modelo: Modelo): Promise<void>{
    try{
        return (await this.axiosClient.put(`/desativar/${modelo.id}`, modelo)).data;
    } catch(error: any){
        return Promise.reject(error.response);
    }
}
public async findByFiltrosPaginado(
    pageRequest: PageRequest
  ): Promise<PageResponse<Modelo>> {
    try {
      let requestPath = "";

      requestPath += `?page=${pageRequest.currentPage}`;
      requestPath += `&size=${pageRequest.pageSize}`;
      requestPath += `&sort=${
        pageRequest.sortField === undefined ? "" : pageRequest.sortField
      },${pageRequest.direction}`;

      return (
        await this.axiosClient.get<PageResponse<Modelo>>(requestPath, {
          params: { filtros: pageRequest.filter },
        })
      ).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
}