import axios, { AxiosInstance } from 'axios';
import { Cachorro } from "@/model/Cachorro";

export class ModeloClient {
    
    private axiosClient: AxiosInstance;

    constructor(){
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/modelo',
            headers: {'Content-Type': 'application/json'}
        })
    }


    public  async findbyid(id:number) : Promise<Cachorro>{
        try{
            return (await this.axiosClient.get<Cachorro> (`/${id}`)).data
        }
        catch(error: any){
            return Promise.reject(error.response)
        }
    }

    public  async listAll() : Promise<Cachorro[]>{
        try{
            return (await this.axiosClient.get<Cachorro[]> ('/lista')).data
        }
        catch(error: any){
            return Promise.reject(error.response)
        }
    }

    public  async findbyativo() : Promise<Cachorro[]>{
        try{
            return (await this.axiosClient.get<Cachorro[]> ('/ativo')).data
        }
        catch(error: any){
            return Promise.reject(error.response)
        }
    }


    public async cadastrar(modelo: Cachorro) :Promise<string>{
        try {
            return (await this.axiosClient.post<string>('',modelo)).data
        } catch (error: any) {
            return Promise.reject(error.response)   
        }

    }

    public async editar (id: number, modelo: Cachorro) :Promise<string>{
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
  