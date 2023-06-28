import axios, { AxiosInstance } from 'axios';
import { Movimentacao } from "@/model/Movimentacao";

export class MovimentacaoClient {
    
    private axiosClient: AxiosInstance;

    constructor(){
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/movimentacao',
            headers: {'Content-Type': 'application/json'}
        })
    }


    public  async findbyid(id:number) : Promise<Movimentacao>{
        try{
            return (await this.axiosClient.get<Movimentacao>("",{params:{id}})).data
        }
        catch(error: any){
            return Promise.reject(error.response)
        }
    }

    public  async listAll() : Promise<Movimentacao[]>{
        try{
            return (await this.axiosClient.get<Movimentacao[]> ('/lista')).data
        }
        catch(error: any){
            return Promise.reject(error.response)
        }
    }

    public  async findbyativo() : Promise<Movimentacao[]>{
        try{
            return (await this.axiosClient.get<Movimentacao[]> ('/ativo')).data
        }
        catch(error: any){
            return Promise.reject(error.response)
        }
    }


    public async cadastrar(movimentacao: Movimentacao) :Promise<string>{
        try {
            return (await this.axiosClient.post<string>('',movimentacao)).data
        } catch (error: any) {
            return Promise.reject(error.response)   
        }

    }

    public async editar (id: number, movimentacao: Movimentacao) :Promise<string>{
        try {
            return (await this.axiosClient.put<string>(`/${id}`, movimentacao)).data
            
        } catch (error: any) {
            return Promise.reject(error.response)   
        }
    }

    public async finalizar (id: number) :Promise<string>{
        try {
            return (await this.axiosClient.put<string>(`/finalizar?id=${id}`)).data
            
        } catch (error: any) {
            return Promise.reject(error.response)   
        }
    }

    public async delete (id:number) : Promise<string>{
        try{
            return (await this.axiosClient.delete<string>(`/${id}`)).data

        }
        catch(error:any)
        {
            return Promise.reject(error.response)

        }
    }


}
  