import { Props } from '../types';
import api from './api';
class SenaService {
    async get(numero: number): Promise<Props>{
        const {data} = await api.get(`/${numero}`);
        return data;
    }
}

export default new SenaService();