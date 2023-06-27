import axios, { AxiosInstance } from 'axios';
import { Modelo } from "@/model/Modelo";

export class ModeloClient {
    
    private axiosClient: AxiosInstance;

    constructor(){
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/modelo',
            headers: {'Content-Type': 'application/json'}
        })
    }


    public  async findbyid(id:number) : Promise<Modelo>{
        try{
            return (await this.axiosClient.get<Modelo> (`/${id}`)).data
        }
        catch(error: any){
            return Promise.reject(error.response)
        }
    }

    public  async listAll() : Promise<Modelo[]>{
        try{
            return (await this.axiosClient.get<Modelo[]> ('/lista')).data
        }
        catch(error: any){
            return Promise.reject(error.response)
        }
    }

    public  async findbyativo() : Promise<Modelo[]>{
        try{
            return (await this.axiosClient.get<Modelo[]> ('/ativo')).data
        }
        catch(error: any){
            return Promise.reject(error.response)
        }
    }


    public async cadastrar(modelo: Modelo) :Promise<string>{
        try {
            return (await this.axiosClient.post<string>('',modelo)).data
        } catch (error: any) {
            return Promise.reject(error.response)   
        }

    }

    public async editar (id: number, modelo: Modelo) :Promise<string>{
        try {
            return (await this.axiosClient.put<string>(`/${id}`, modelo)).data
            
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
  