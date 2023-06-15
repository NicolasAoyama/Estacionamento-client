import axios, { AxiosInstance } from "axios";
import { Marca } from "@/model/Marca";
import { PageRequest } from "@/model/page/page-request";
import { PageResponse } from "@/model/page/page-response";

export class MarcaClient{
    private axiosClient: AxiosInstance;
    constructor(){
        this.axiosClient = axios.create({
            baseURL: "http://localhost:8080/api/marca",
            headers: { "Content-type": "application/json" },
        });
      }
      public async findById(): Promise<Marca>{
        try{
            return (await this.axiosClient.get<Marca>(`/id`)).data;
        } catch (error: any){
            return Promise.reject(error.response);
        }
      }
      public async cadastrar(marca: Marca): Promise<void> {
        try {
            return await this.axiosClient.post("/", marca);
        } catch (error: any){
            return Promise.reject(error.response);
        }
      }
      public async editar(marca: Marca): Promise<void>{
        try {
            return (await this.axiosClient.put(`/${marca.id}`, marca)).data;
        } catch(error: any){
            return Promise.reject(error.response);
        }
      }
      public async desativar(marca: Marca): Promise<void>{
        try{
            return (await this.axiosClient.put(`/desativar/${marca.id}`, marca)).data;
        } catch(error: any){
            return Promise.reject(error.response);
        }
    }
    public async findByFiltrosPaginado(
        pageRequest: PageRequest
      ): Promise<PageResponse<Marca>> {
        try {
          let requestPath = "";
    
          requestPath += `?page=${pageRequest.currentPage}`;
          requestPath += `&size=${pageRequest.pageSize}`;
          requestPath += `&sort=${
            pageRequest.sortField === undefined ? "" : pageRequest.sortField
          },${pageRequest.direction}`;
    
          return (
            await this.axiosClient.get<PageResponse<Marca>>(requestPath, {
              params: { filtros: pageRequest.filter },
            })
          ).data;
        } catch (error: any) {
          return Promise.reject(error.response);
        }
      }
    }