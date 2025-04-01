import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';

const useRole = () => {

    const axiosPublic = useAxiosPublic()
    const { user } = useAuth()

    const { data: role} = useQuery({
        queryKey: ['role'],
        queryFn: async () => {
            const result = await axiosPublic.get(`/users/role/${user.email}`)
            return result.data.role
        }
    })

    return [role]
};

export default useRole;