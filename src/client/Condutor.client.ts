import axios, { AxiosInstance } from 'axios';
import { Condutor } from "@/model/Condutor";
  

export class CondutorClient{
    private axiosClient: AxiosInstance;


    constructor(){
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/condutor',
            headers: {'Content-Type': 'application/json'}
        })
    }


    public  async findbyid(id:number) : Promise<Condutor>{
        try{
            return (await this.axiosClient.get<Condutor> (`/${id}`)).data
        }
        catch(error: any){
            return Promise.reject(error.response)
        }
    }
    public  async listAll() : Promise<Condutor[]>{
        try{
            return (await this.axiosClient.get<Condutor[]> (`/lista`)).data
        }
        catch(error: any){
            return Promise.reject(error.response)
        }
    }
    public  async findbyativo() : Promise<Condutor[]>{
        try{
            return (await this.axiosClient.get<Condutor[]> ('/ativo')).data
        }
        catch(error: any){
            return Promise.reject(error.response)
        }
    }
    public async cadastrar(condutor: Condutor) :Promise<string>{
        try {
            return (await this.axiosClient.post<string>('',condutor)).data
        } catch (error: any) {
            return Promise.reject(error.response)   
        }
    }
    public async editar (id: number, condutor: Condutor) :Promise<string>{
        try {
            return (await this.axiosClient.put<string>(`/${id}`, condutor)).data
            
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