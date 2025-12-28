import {Link,} from "react-router-dom"
import { Popover,PopoverContent,PopoverTrigger } from "@radix-ui/react-popover"
import {Button} from "@/components/ui/button"
import {Avatar,AvatarFallback,AvatarImage} from "@/components/ui/avatar"
import { User ,LogOut} from 'lucide-react';
import { useSelector } from "react-redux";
import Profile from "../profile";

const Navbar = () => {
    const {user} = useSelector(store => store.auth)
  return (  
    <div className="bg-">

        <div className="flex items-center justify-between mx-auto max-w-7xl h-16 ">
      <div>
        <h1 className="text-2xl font-bold  text-amber-700"> Job <span className="text=[#f83002]">Portal</span></h1>
      </div>

      <div className="flex items-center gap-12">
        <ul className="flex font-medium gap-5 items-center">
            <Link to="/"><li>Home</li></Link>
            <Link to="/jobs"><li>jobs</li></Link>
            <Link to="/browser"><li>Browser</li></Link>
        </ul>
        {
        !user?(
                <div className="flex items-center gap-2">
                    <Link to="/login"><Button className="bg-blue-400 hover:bg-blue-950">Log in </Button></Link>
                    <Link to="/signup"><Button className="bg-fuchsia-500 hover:bg-fuchsia-900">signUp</Button></Link>
                </div>
            ):(
                 <Popover>   
            <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn"/>
                </Avatar>
            </PopoverTrigger>
            <PopoverContent className="w-80">
                <div>
                     <div className="flex gap-2 space-y-2">
                    <Avatar className="cursor-pointer">
                       <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn"/>
                    </Avatar>
                <div>
                   <h4 className="font-medium ">Shivam Sharma</h4>
                   <p className="text-sm  text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, ad! </p>
                </div>
            </div>
            <div className="flex flex-col my-3 text-gray-600">
                <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <User/>
                    <Button variant="link"><Link to="/Profile"> view profile</Link> </Button>
                </div> 
                <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <LogOut/>
                    <Button variant="link"> Logout</Button>
                </div>
            </div>
                </div>
               
            </PopoverContent>
        </Popover>
            )
        }
      </div>
        </div>
     
    </div>
  )
}

export default Navbar
