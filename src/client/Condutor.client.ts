import axios, { AxiosInstance } from 'axios';
import { Pessoa } from "@/model/Pessoa";
  

export class CondutorClient{
    private axiosClient: AxiosInstance;


    constructor(){
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/condutor',
            headers: {'Content-Type': 'application/json'}
        })
    }


    public  async findbyid(id:number) : Promise<Pessoa>{
        try{
            return (await this.axiosClient.get<Pessoa> (`/${id}`)).data
        }
        catch(error: any){
            return Promise.reject(error.response)
        }
    }

    public  async listAll() : Promise<Pessoa[]>{
        try{
            return (await this.axiosClient.get<Pessoa[]> ('/lista')).data
        }
        catch(error: any){
            return Promise.reject(error.response)
        }
    }

    public  async findbyativo() : Promise<Pessoa[]>{
        try{
            return (await this.axiosClient.get<Pessoa[]> ('/ativo')).data
        }
        catch(error: any){
            return Promise.reject(error.response)
        }
    }

    public async cadastrar(condutor: Pessoa) :Promise<string>{
        try {
            return (await this.axiosClient.post<string>('',condutor)).data
        } catch (error: any) {
            return Promise.reject(error.response)   
        }

    }

    public async editar (id: number, condutor: Pessoa) :Promise<string>{
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