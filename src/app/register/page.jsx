"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";


const RegisterPage = () => {
    const router=useRouter();
    const onSubmit = async(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userdata = {};
        // Convert FormData to plain object
        formData.forEach((value, key) => {
            userdata[key] = value.toString();
        });
        // alert(`Form submitted with: ${JSON.stringify(userdata, null, 2)}`);
        console.log(userdata);

        const {data,error}=await authClient.signUp.email({
            password:userdata.password,
            email:userdata.email,
            name:userdata.name,
            image:userdata.image,
        })
        console.log(data);
        if(error){
            toast.error(`Error: ${error.message}`);
        }else{

            router.push("/");
            toast.success(`Sign-up successful: ${data?.user?.name || "User"}`);
        }
    }

     const handleRegister = async () => {
        const data = await authClient.signIn.social({
            provider: "google",

         });
       
    };

    return (
        <div>
            <Form className="flex w-96 flex-col gap-4  mx-auto mt-13 px-6 py-11 shadow-[0_0_20px_rgba(0,0,0,0.15)] rounded-xl" onSubmit={onSubmit}>
               <h3 className="text-3xl font-bold text-fuchsia-900 mb-4"> Please Register</h3>
                <TextField
                    isRequired
                    name="name"
                    validate={(value) => {
                        if (value.length < 3) {
                            return "Name must be at least 3 characters";
                        }
                        return null;
                    }}
                >
                    <Label>Name</Label>
                    <Input name="name" placeholder="Enter your name" />
                    <FieldError />
                </TextField>
                <TextField
                    isRequired
                    name="email"
                    type="email"
                    validate={(value) => {
                        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                            return "Please enter a valid email address";
                        }
                        return null;
                    }}
                >
                    <Label>Email</Label>
                    <Input name="email" placeholder="Enter your email" />
                    <FieldError />
                </TextField>
                <TextField isRequired type="text">
                    <Label>Image URL</Label>
                    <Input placeholder="Enter image URL" name="image" />
                    <FieldError />
                </TextField>
                <TextField
                    isRequired
                    minLength={8}
                    name="password"
                    type="password"
                    validate={(value) => {
                        if (value.length < 8) {
                            return "Password must be at least 8 characters";
                        }
                        if (!/[A-Z]/.test(value)) {
                            return "Password must contain at least one uppercase letter";
                        }
                        if (!/[0-9]/.test(value)) {
                            return "Password must contain at least one number";
                        }
                        return null;
                    }}
                >
                    <Label>Password</Label>
                    <Input name="password" placeholder="Enter your password" />
                    <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                    <FieldError />
                </TextField>
                <div className="flex gap-2">
                    <Button type="submit">
                        <Check />
                        Register
                    </Button>
                    <Button type="reset" variant="secondary">
                        Reset
                    </Button>
                </div>
                 <p className=" font-semibold text-center text-lg">OR</p>
                <Button onClick={handleRegister} variant="outline" className="min-w-full"><FcGoogle></FcGoogle> Register with Google</Button>
            </Form>
        </div>
    );
};

export default RegisterPage;