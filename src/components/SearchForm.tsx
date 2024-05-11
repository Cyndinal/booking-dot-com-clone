'use client'

import { addDays } from "date-fns"
import { DateRange } from "react-day-picker"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {any, date, string, z} from "zod"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import {useState} from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {BedDoubleIcon, CalendarIcon} from "lucide-react";
import {cn} from "@/lib/utils";
import {format} from 'date-fns'
import {Calendar} from "@/components/ui/calendar";
import { toast } from "@/components/ui/use-toast"




const formSchema = z.object({
    location:z.string().min(2).max(50,{message: "Location must be at least 2 characters."}),
    date:z.object({
        from:z.string().date(),
        to:z.string().date()
    }),
    adult:z.string().min(1,{message:"Please, select at least 1 adult"}),
    children:z.string().min(0).max(12,{message:"Max 12 occupancy"}),
    room:z.string().min(1,{message:"Please, select only a room"})

})

export function ProfileForm() {
    const [date, setDate] =useState<DateRange | undefined>({
    from: new Date(2024, 4, 20),
    to: addDays(new Date(2024, 4, 20), 20),
  })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver:zodResolver(formSchema),
        defaultValues:{
             location:'',
            // date:{from:new Date(), to: new Date()},
            date:{from:undefined, to:undefined},
            adult:'1',
            children: '0',
            room:'1'
                    }
    })
function onSubmit(values: z.infer<typeof formSchema>) {
        console.log("Date",values.date)


    //       toast({
    //       title: "You submitted the following values:",
    //       description:(
    //      <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-red-500">{JSON.stringify(values, null, 2)}</code>
    //     </pre>
    //   ),
    // })
}
  return (
  <div className={'md:grid relative'}>
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className={"md:grid grid-cols-2 items-center justify-center md:ml-36"}>
                <div className={'md:flex relative items-center justify-center'}>
                    <FormField
                        control={form.control}
                        name={'location'}
                        render={({field}) => (
                            <FormItem>
                                <FormMessage/>
                                <FormLabel>
                                    <div className={'text-white'}>
                                        <BedDoubleIcon/>
                                    </div>
                                </FormLabel>
                                <FormControl>
                                    <Input placeholder="London ,UK" {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />

                </div>
                <div className={'md:flex relative items-center'}>
                    <FormField
                        control={form.control}
                        name={'room'}
                        render={({field}) => (
                            <FormItem>
                                <FormMessage/>
                                <FormLabel>
                                    <div className={' text-white'}>
                                        Rooms
                                    </div>
                                </FormLabel>
                                <FormControl>
                                    <Input type={'number'} placeholder="Room" {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                </div>


                <div className={'md:flex relative items-center justify-center'}>
                    <FormField
                        control={form.control}
                        name={'adult'}
                        render={({field}) => (
                            <FormItem>
                                <FormMessage/>
                                <FormLabel>
                                    <div className={'text-white'}>
                                        Adult
                                    </div>
                                </FormLabel>
                                <FormControl>
                                    <Input type={'number'} placeholder="Adult" {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                </div>
                <div className={'md:flex relative items-center'}>
                    <FormField
                        control={form.control}
                        name={'children'}
                        render={({field}) => (
                            <FormItem>
                                <FormMessage/>
                                <FormLabel>
                                    <div className={' text-white'}>
                                        Children
                                    </div>
                                </FormLabel>
                                <FormControl>
                                    <Input type={'number'} placeholder="Children" {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                </div>

                {/*<div className={'justify-center items-center mx-auto'}>*/}
                {/*    <FormField*/}
                {/*        control={form.control}*/}
                {/*        name={'date'}*/}
                {/*        render={({field}) => (*/}
                {/*            <FormItem>*/}
                {/*                <FormMessage/>*/}
                {/*                <FormLabel>*/}
                {/*                    <div className={'text-white mx-auto mt-5'}>Calendar</div>*/}
                {/*                </FormLabel>*/}
                {/*                <Popover>*/}
                {/*                    <PopoverTrigger asChild>*/}
                {/*                        <Button*/}
                {/*                            id="date"*/}
                {/*                            variant={"outline"}*/}
                {/*                            className={cn(*/}
                {/*                                "",*/}
                {/*                                !date && "text-muted-foreground"*/}
                {/*                            )}*/}
                {/*                        >*/}
                {/*                            <CalendarIcon className="mr-2 h-4 w-4"/>*/}
                {/*                            {date?.from ? (*/}
                {/*                                date.to ? (*/}
                {/*                                    <>*/}
                {/*                                        {format(date.from, "LLL dd, y")} -{" "}*/}
                {/*                                        {format(date.to, "LLL dd, y")}*/}
                {/*                                    </>*/}
                {/*                                ) : (*/}
                {/*                                    format(date.from, "LLL dd, y")*/}
                {/*                                )*/}
                {/*                            ) : (*/}
                {/*                                <span>Pick a date</span>*/}
                {/*                            )}*/}
                {/*                        </Button>*/}
                {/*                    </PopoverTrigger>*/}
                {/*                    <PopoverContent className="w-auto p-0" align="start">*/}
                {/*                        <Calendar*/}
                {/*                            initialFocus*/}
                {/*                            mode="range"*/}
                {/*                            defaultMonth={date?.from}*/}
                {/*                            selected={date}*/}
                {/*                            onSelect={setDate}*/}
                {/*                            disabled={(date) => date < new Date() || date < new Date("2024-05-05")}*/}
                {/*                            numberOfMonths={2}*/}
                {/*                        />*/}
                {/*                    </PopoverContent>*/}
                {/*                </Popover>*/}
                {/*            </FormItem>*/}
                {/*        )}*/}
                {/*    />*/}
                {/*</div>*/}
            </div>
            <Button type="submit" className={'flex justify-center px-10 items-center mx-auto bg-blue-400'}>Submit</Button>

        </form>
    </Form>
  </div>
  )
}

export default ProfileForm
