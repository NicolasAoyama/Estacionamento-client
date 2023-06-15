import axios, { AxiosInstance } from "axios";
import { Condutor } from "@/model/Condutor";
import { PageRequest } from "@/model/page/page-request";
import { PageResponse } from "@/model/page/page-response";

export class CondutorClient{
    private axiosClient: AxiosInstance;
    constructor(){
        this.axiosClient = axios.create({
            baseURL: "http://localhost:8080/api/condutor",
            headers: { "Content-type": "application/json" },
        });
      }   
      public async findByAll(): Promise<Condutor> {
        try {
          return (await this.axiosClient.get<Condutor>(`/lista`)).data;
        } catch (error: any) {
          return Promise.reject(error.response);
        }
      }
      public async findById(): Promise<Condutor>{
        try{
            return (await this.axiosClient.get<Condutor>(`/id`)).data;
        } catch (error: any){
            return Promise.reject(error.response);
        }
      }
      public async cadastrar(condutor: Condutor): Promise<void> {
        try {
            return await this.axiosClient.post("/", condutor);
        } catch (error: any){
            return Promise.reject(error.response);
        }
      }
      public async editar(condutor: Condutor): Promise<void>{
        try {
            return (await this.axiosClient.put(`/${condutor.id}`, condutor)).data;
        } catch(error: any){
            return Promise.reject(error.response);
        }
      }
      public async desativar(condutor: Condutor): Promise<void>{
        try{
            return (await this.axiosClient.put(`/desativar/${condutor.id}`, condutor)).data;
        } catch(error: any){
            return Promise.reject(error.response);
        }
    }
    public async findByFiltrosPaginado(
        pageRequest: PageRequest
      ): Promise<PageResponse<Condutor>> {
        try {
          let requestPath = "";
    
          requestPath += `?page=${pageRequest.currentPage}`;
          requestPath += `&size=${pageRequest.pageSize}`;
          requestPath += `&sort=${
            pageRequest.sortField === undefined ? "" : pageRequest.sortField
          },${pageRequest.direction}`;
    
          return (
            await this.axiosClient.get<PageResponse<Condutor>>(requestPath, {
              params: { filtros: pageRequest.filter },
            })
          ).data;
        } catch (error: any) {
          return Promise.reject(error.response);
        }
      }
    }

    