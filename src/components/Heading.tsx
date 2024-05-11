'use client'


// const Heading = ()=>{
//   let [isOpen, setIsOpen] = useState(false)
//     return(
//          <>
//       <button onClick={() => setIsOpen(true)}>Open dialog</button>
//       <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
//         {/* The backdrop, rendered as a fixed sibling to the panel container */}
//         <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
//
//         {/* Full-screen container to center the panel */}
//         <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
//           {/* The actual dialog panel  */}
//           <DialogPanel className="max-w-lg space-y-4 bg-white p-12">
//
//             <p>Are you sure you want to deactivate your account? All of your data will be permanently removed.</p>
//               <div className="flex gap-4">
//
//                   <button onClick={() => setIsOpen(false)}>Cancel</button>
//                   <button onClick={() => setIsOpen(false)}>Deactivate</button>
//
//                   <div>
//                       <button type={"button"} onClick={() => setIsOpen(false)}>
//                           <span className={'sr-only'}>Close Menu</span>
//                           <XCircle className={"h-6 w-6"}/>
//                       </button>
//
//                   </div>
//
//                   <div className={'mt-5 flow-root'}>
//                       <div className={'space-y-4 py-6'}>
//                           <Disclosure as={'div'}>
//                               {({open}) => (
//                                   <Fragment>
//                                       <DisclosureButton
//                                           className={'flex w-full items-center justify-between leading-7 hover:bg-red-400'}>
//                                           Stays
//                                           <ChevronDownIcon
//                                               className={cn(open ? "rotate 180" : "", "h-5 w-5 flex-none ")}/>
//
//                                           <DisclosurePanel>
//                                               {[...products, ...callToAction].map((item) => (
//                                                   <DisclosureButton
//                                                       key={item.name}
//                                                       as={"a"}
//                                                       href={item.href}
//                                                   >
//                                                       {item.name}
//
//                                                   </DisclosureButton>
//                                               ))}
//                                           </DisclosurePanel>
//
//                                       </DisclosureButton>
//                                   </Fragment>
//                               )}
//
//                           </Disclosure>
//
//                       </div>
//
//                   </div>
//
//               </div>
//           </DialogPanel>
//         </div>
//       </Dialog>
//          </>
//
//     )
// }




import Link from "next/link";
import Image from "next/image";
import {Fragment, useState} from "react";
import {Bars3Icon} from "@heroicons/react/16/solid";
import {
    Button,
    Dialog,
    DialogPanel, DialogTitle,
    Disclosure, DisclosureButton, DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverPanel,
    Transition
} from "@headlessui/react";
import {ChevronDownIcon} from "@heroicons/react/16/solid";
import {HomeIcon,PhoneIcon,PaperAirplaneIcon, PlayCircleIcon,ChatBubbleLeftIcon} from "@heroicons/react/16/solid";
import {XCircle, XIcon} from "lucide-react";
import {cn} from "@/lib/utils";

const products =[
    {
        name:"Book a stay",
        description:"Consider booking a stay ",
        icon:HomeIcon,
        href:"#"
    },
    {
        name:"Book a flight",
        description:"Book a flight for luxury",
        icon:PaperAirplaneIcon,
        href:"#"
    },
    {
        name:"Contact our service",
        description:"Part of our neat contact scheme ",
        icon:ChatBubbleLeftIcon,
        href:"#"
    },
]

const callToAction =[
    {
        name:"Contact for support ",
        href:"",
        icon:PhoneIcon,

    } , {
        name:"See demo booking",
        href:"#",
        icon:PlayCircleIcon,

    }
]



const Heading =()=>{
    const [mobileMenuOpen, setMobileMenu] = useState(false)
    const [closeMenu, setCloseMenu] = useState(false)
    return(
        <header className="bg-blue-800">
           <nav className="flex max-w-7xl items-center justify-between p-6 lg:px-6 gap-10 text-white">
               <div className={"flex lg:flex-1"}>
            <Link href={"/"}>
                <span className={"sr-only"}>Booking.com</span>
                <Image src={"/flight.svg"} alt={"Booking"} width={40} height={40}/>
            </Link>
               </div>
               <div className={"flex md:hidden"}>
                   <button onClick={()=>setMobileMenu(true)}>
                       <span className={"sr-only"}>Open Menu Content</span>
                       <Bars3Icon className={"h-6 w-6"}/>
                   </button>


               </div>

               <Popover className="hidden md:flex">
               <PopoverButton className={"font-bold outline-none text-sm flex gap-5"}>
                 Stays
                 <ChevronDownIcon/>
             </PopoverButton>

              <Transition
                as={Fragment}
                // show={mobileMenuOpen}
                enter="transition-opacity duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                  <PopoverPanel anchor="bottom">
                    <div className={'w-80 bg-blue-100 shadow-amber-50 rounded-lg h-auto mt-6'}>

                        {products.map(item=>(
                            <div key={item.name} className={"grid grid-cols-3 m-3"}>
                                <div className={'h-6 w-6 bg-gray-50 rounded-lg hover:bg-gray-400'}>
                                    <item.icon/>
                                </div>
                                <span className={'font-bold text-sm'}>
                                    <a href={item.href}>
                                    {item.name}
                                    </a>
                                </span>
                                <span className={'font-bold text-sm'}>
                                    <a href={item.href}>
                                    {item.description}
                                    </a>
                                </span>

                            </div>
                        ))}





                        {callToAction.map(item=>(
                            <div key={item.name} className={"grid grid-cols-2 m-3"}>
                                <div className={'h-6 w-6 bg-gray-50 rounded-lg hover:bg-gray-400'}>
                                    <item.icon/>
                                </div>
                                <div className={'font-bold text-sm'}>
                                    <a href={item.href}>
                                     <Popover className="hidden   md:flex ">
                                 <PopoverButton className={"font-bold outline-none text-sm"}>
                                  Flights
                                 </PopoverButton>
            </Popover>
                                    </a>
                                </div>


                            </div>
                        ))}

                    </div>
                  </PopoverPanel>
              </Transition>


            </Popover>


           {/*    Flight*/}
            <Popover className="hidden   md:flex ">
             <PopoverButton className={"font-bold outline-none text-sm"}>
              Flights
             </PopoverButton>
            </Popover>

           {/*    */}
                 <Popover className="hidden md:flex ">
             <PopoverButton className={"font-bold outline-none text-sm"}>
              Car Rentals
             </PopoverButton>
            </Popover>

           {/*    */}
                 <Popover className="hidden md:flex ">
             <PopoverButton className={"font-bold outline-none text-sm"}>
              Attraction
             </PopoverButton>
            </Popover>

             <Popover className="hidden md:flex ">
             <PopoverButton className={"font-bold outline-none text-sm"}>
              Flight + Hotel
             </PopoverButton>
            </Popover>


               <Button
                   className={"hidden  md:flex bg-amber-600 p-2.5 rounded-xl font-semibold "}>
                   Log in<span>&rarr;</span></Button>


           </nav>


            <Dialog open={mobileMenuOpen} onClose={() => setMobileMenu(false)} className="relative z-50">
                <DialogPanel className={'fixed inset-y-0 w-1/2 bg-blue-800 px-12 py-6 overflow-y-auto right-0 z-10 ' +
                    'max-w-lg space-y-4 border  p-12'}>
                    <div className={'flex justify-between gap-auto  items-center'}>
                         <a href={"/"}>
                         <span className={"sr-only"}>Booking.com</span>
                         <Image src={"/flight.svg"} alt={"Booking"} width={30} height={30}
                        className={"flex ml-0 left-0"}/>
                        </a>

                        <button type={"button"} onClick={() => setMobileMenu(false)}>
                        <span className={'sr-only'}> Close Menu</span>
                        <XCircle className={"h-6 w-6"}/>
                    </button>
                    </div>



                {/*    Beginning */}
                     <div className={'mt-5 flow-root'}>
                         <div className={'space-y-4 py-6'}>
                            <Disclosure as={'div'}>
                               {({open}) => (
                                     <Fragment>
                                   <DisclosureButton className={' w-full items-center justify-between leading-7'}>
                                       <DialogTitle className={"font-sans text-xl font-bold w-full "}>
                                           State
                                           <ChevronDownIcon className={cn(open ? "-rotate-180" : "",'flex h-5 w-5 align-center mx-auto   ')}/>
                                       </DialogTitle>

                                       <DisclosurePanel>
                                           <div className={"mb-5"}>

                                           <div className={"hover:bg-amber-100 w-full  rounded-lg"}>
                                               <Button className={" font-bold outline-none text-sm p-2.5"}>
                                                   Flights
                                               </Button>
                                           </div>

                                           <div className={"hover:bg-amber-100 w-full rounded-lg"}>
                                                <Button className={" font-bold outline-none text-sm p-2.5"}>
                                                   Car Rentals
                                               </Button>
                                           </div>

                                            <div className={"hover:bg-amber-100 w-full rounded-lg"}>
                                                <Button className={" font-bold outline-none text-sm p-2.5"}>
                                                  Attraction*
                                               </Button>
                                           </div>
                                           <div className={"hover:bg-amber-100 w-full rounded-lg"}>
                                                <Button className={" font-bold outline-none text-sm p-2.5"}>
                                                  Hotel + Flight *
                                               </Button>
                                           </div>

                                               <div className={"mt-20 flex bg-amber-600 p-2.5 rounded-xl font-semibold hover:bg-green-300"}>

                                                   <Button className={'font-semibold align-center mx-auto'}>
                                                       <Link href={"#"}>
                                                       Log in <span>&rarr;</span>
                                                       </Link>
                                                   </Button>

                                               </div>


                                                </div>






                                       </DisclosurePanel>

                                       </DisclosureButton>
                               </Fragment>
                           )}

                       </Disclosure>

                         </div>

                     </div>


                {/*    end*/}

                </DialogPanel>

            </Dialog>


        </header>
    )
}

export default Heading;