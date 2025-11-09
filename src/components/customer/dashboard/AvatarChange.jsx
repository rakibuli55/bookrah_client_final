import { IoImageOutline } from "react-icons/io5";
const AvatarChange = () => {
    //const { userData, userRefetch, userRole } = useAuth()
    //  const axiosSecure = useAxios()
    // Mutation to handle avatar update
    {/**
        
        const avatarUpdateMutation = useMutation({
        mutationKey: ["AvatarUpdate"],
        mutationFn: async (file) => {
            const formData = new FormData();
            formData.append("avatar", file);
            const response = await axiosSecure.post("/website/user/avatar/update", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            });
            return response?.data;
        },
        onSuccess: (response) => {
            userRefetch()
            toast.success(response?.message || "Avatar updated successfully")
        },
        onError: (errors) => {
            console.log(errors);
            toast.error(errors?.response?.data?.message || "Error updating avatar")
        },
    });
        
        */}
    // Handle file change
    const handleChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            console.log(file);
            // avatarUpdateMutation.mutate(file);
        }
    };
    // main component
    return (
        <label htmlFor="profile-upload" className="relative size-30  lg:size-36 xl:size-52 cursor-pointer rounded-full flex justify-center items-center">
            <img
                src="https://i.pravatar.cc"
                alt={"profile_image"}
                className="w-full h-full object-cover rounded-full"
            />
            <div className="absolute transition-opacity duration-300 right-5 size-8 md:size-10 flex justify-center items-center z-10 -bottom-1  bg-primary border-3 border-white rounded-full p-2 shadow cursor-pointer">
                <IoImageOutline className=" text-heading text-xl" />
            </div>
            {/**
             * {
                avatarUpdateMutation.isPending && (
                    <div className="absolute flex justify-center items-center inset-0 w-full h-full bg-black/50 z-30 rounded-full  ">
                        <Loader size={38} color="#EE713D" />
                    </div>
                )
            }
             * 
             * 
             */}
            <input
                id="profile-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleChange}
            />
        </label>
    )
}

export default AvatarChange