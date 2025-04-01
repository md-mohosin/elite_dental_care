import React from 'react';
import useAxiosPublic from '../../../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';

const AllUsers = () => {

    const axiosPublic = useAxiosPublic()

    const { data: users = [], refetch } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await axiosPublic.get('/users')
            return res.data
        }
    })


    const handleDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You want delete him/her!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/users/${id}`)
                .then(res=>{
                    console.log(res.data)
                    Swal.fire({
                        position: 'top-end',
                        title: "Deleted!",
                        icon: "success"
    
                    });
                    refetch()
                })

            }
        });
    }




    const makeAdmin = () => {

        Swal.fire({
            title: "Are you sure?",
            text: "You want to make admin him/her!",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes !"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    position: 'top-end',
                    title: "Now he/she is admin",
                    icon: "success"
                });
                console.log('eofjldksfj')
            }
        });
    }


    return (
        <div>
            <div className="overflow-x-auto">

                <table className="table">
                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th>Image</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {
                        users.map((user, index) =>
                            <tbody>
                                <tr>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img src={user.image} />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>
                                        <p>{user.email}</p>
                                    </td>
                                    <td>{user.role}</td>
                                    <td className='flex flex-col md:flex-row-reverse lg:flex-row items-center gap-1'>
                                        <MdDelete onClick={() => handleDelete(user._id)}
                                            color='red'
                                            className='cursor-pointer' size={30}></MdDelete>

                                        <button onClick={makeAdmin}
                                            className='btn'>Make Admin
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        )
                    }

                </table>
            </div>
        </div>
    );
};

export default AllUsers;