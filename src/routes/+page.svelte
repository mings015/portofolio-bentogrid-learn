<script lang="ts">
    import LastPart from "../components/last-part.svelte";
    import Icon from '@iconify/svelte';
</script>

<style>
    
   
    div :global(.color-icon) {
        color: #A291FD;
    }

    

   /* Ensure the container is scrollable on mobile */
   
 </style>


<div class="container flex justify-center mx-5">
    <div class="container h-auto max-w-96 sm:max-w-96 md:max-w-[900px] lg:max-w-[900px] xl:max-w-full gap-2">
        <div class="grid grid-cols-3 mb-2 rounded-lg bg-primary_500 md:hidden">
            
            <button class="flex items-center justify-center gap-2 p-2 m-2 text-sm rounded-lg text-primary_600 bg-primary">
                <Icon icon="f7:person-fill" />
                <span>About</span>
            </button>
            <button class="flex items-center justify-center gap-2 p-2 m-2 text-sm rounded-lg text-primary_200 bg-primary_400">
                <Icon icon="material-symbols-light:bookmark-add" />
                <span>Works</span>
            </button>
            <button class="flex items-center justify-center gap-2 p-2 m-2 text-sm rounded-lg text-primary_200 bg-primary_400">
                <Icon icon="mdi:contact" />
                <span>Contact</span>
            </button>
            
        </div>
        
        <div class="container mx-auto">
            <div class="grid xl:grid-cols-2 xl:gap-2 xl:flex">
                <div class="container grid justify-center grid-cols-1 gap-2 md:grid-cols-2 xl:w-3/5">
                    <div>
                        <div class="border-2 h-1/3">3</div>
                        <div class="border-2 h-1/3">4</div>
                        <div class="border-2 h-1/3">5</div>
                    </div>
                    <div class="flex flex-col order-first gap-2 md:order-none"> 
                        <div class="flex flex-col h-auto gap-4 p-4 rounded-lg bg-primary_500">
                            <div class="flex justify-between gap-4">
                                <div class="flex items-center gap-4">
                                    <img class="w-[100px] h-[100px] object-cover rounded-lg"  src="https://shanibacreative.com/wp-content/uploads/2020/06/membuat-foto-profil-yang-bagus-834x556.jpg" alt="profile">
                                <div class="flex flex-col justify-between">
                                    <div class="flex items-center gap-2 px-4 py-2 rounded-full bg-primary_400">
                                        <span class="relative flex w-2 h-2">
                                            <span class="absolute inline-flex w-full h-full bg-green-400 rounded-full opacity-75 animate-ping"></span>
                                            <span class="relative inline-flex w-2 h-2 bg-green-500 rounded-full"></span>
                                        </span>
                                        <div class="text-sm text-primary_200">Available To Work</div>
                                    </div>
                                    <div class="text-[22px] text-primary_100">Muh. Muhaimin Nur</div>
                                    <div class="text-primary_200">Im <span class="text-primary">Kontolodon</span></div>
                                </div>
                                </div>
                                <!-- <div class="invisible md:visible">
                                    <Icon icon="ic:round-file-download" class="color-icon" />
                                    <span class="ml-2">Makassar</span>
                                </div> -->
                            </div>
                            <div class="flex flex-wrap items-center gap-1 px-2 py-3 text-sm rounded-lg bg-primary_400 text-primary_200">
                                
                                <span>
                                    <div class="flex items-center px-2 py-1 rounded-full bg-opacity-40 bg-primary_450">
                                        <Icon icon="carbon:location-filled" class="color-icon" />
                                        <span class="ml-2">Makassar</span>
                                    </div>
                                </span>
                                <span>
                                    <div class="flex items-center px-2 py-1 rounded-full bg-opacity-40 bg-primary_450">
                                        <Icon icon="mdi:earth" class="color-icon" />
                                        <span class="ml-2">Indonesia & English</span>
                                    </div>
                                </span>
                                <span>
                                    <div class="flex items-center px-2 py-1 rounded-full bg-opacity-40 bg-primary_450">
                                        <Icon icon="material-symbols:military-tech" class="color-icon" />
                                        <span class="ml-2">Front End Developer</span>
                                    </div>
                                </span>
                                <span>
                                    <div class="flex items-center px-2 py-1 rounded-full bg-opacity-40 bg-primary_450">
                                        <Icon icon="mdi:education-outline" class="color-icon" />
                                        <span class="ml-2">Universitas Dipa Makassar</span>
                                    </div>
                                </span>
                            </div>
                            <div class="flex items-center justify-center gap-3 text-primary_200"> 
                                <div class="flex items-center justify-center flex-1 gap-1 px-4 py-3 rounded-lg bg-primary_400">
                                    <Icon icon="mingcute:whatsapp-fill" class="color-icon" />
                                    <span class="ml-2">WhatsApp Me</span>
                                </div>
                                <div class="flex items-center justify-center flex-1 gap-1 px-4 py-3 rounded-lg bg-primary_400">
                                    <Icon icon="ic:round-file-download" class="color-icon" />
                                    <span class="ml-2">Resume</span>
                                </div>
                            </div>
                        </div>
                        <div class="grid grid-cols-2 gap-2 md:grid-cols-3 md:order-first ">
                            <div class="flex flex-col items-center gap-2 p-2 rounded-lg justify-evenly bg-primary_500">
                                <div class="flex items-center">
                                    <span class="text-5xl text-primary_300">56</span>
                                    <Icon icon="flowbite:plus-outline" class="color-icon" style="font-size: 24px;" />
                                </div>
                                <div class="flex items-center justify-center w-full gap-2 rounded-full bg-primary_400">
                                    <Icon icon="solar:flag-bold" class="color-icon" />
                                    <span class="text-primary_200">Project</span>
                                </div>
                            </div>
                            <div class="flex flex-col items-center gap-2 p-2 rounded-lg justify-evenly bg-primary_500">
                                <div class="flex items-center">
                                    <span class="text-5xl text-primary_300">56</span>
                                    <Icon icon="flowbite:plus-outline" class="color-icon" style="font-size: 24px;" />
                                </div>
                                <div class="flex items-center justify-center w-full gap-2 rounded-full bg-primary_400">
                                    <Icon icon="solar:flag-bold" class="color-icon" />
                                    <span class="text-primary_200">Project</span>
                                </div>
                            </div>
                            <div class="flex flex-col items-center gap-2 p-2 rounded-lg justify-evenly bg-primary_500">
                                <div class="flex items-center">
                                    <span class="text-5xl text-primary_300">56</span>
                                    <Icon icon="flowbite:plus-outline" class="color-icon" style="font-size: 24px;" />
                                </div>
                                <div class="flex items-center justify-center w-full gap-2 rounded-full bg-primary_400">
                                    <Icon icon="solar:flag-bold" class="color-icon" />
                                    <span class="text-primary_200">Project</span>
                                </div>
                            </div>
                            <div class="flex flex-col items-center gap-2 p-2 rounded-lg justify-evenly bg-primary_500 md:hidden">
                                <div class="flex items-center">
                                    <span class="text-5xl text-primary_300">56</span>
                                    <Icon icon="flowbite:plus-outline" class="color-icon" style="font-size: 24px;" />
                                </div>
                                <div class="flex items-center justify-center w-full gap-2 rounded-full bg-primary_400">
                                    <Icon icon="solar:flag-bold" class="color-icon" />
                                    <span class="text-primary_200">Project</span>
                                </div>
                            </div>
                            
                        </div>
                        <div class="flex flex-col items-center justify-start gap-1 p-2 rounded-lg bg-primary_500">
                            <div class="flex items-center gap-2">
                                <Icon icon="mingcute:whatsapp-fill" class="color-icon" />
                                <span class="text-primary_300 text-[14px]">My Expertise</span>
                            </div>
                            <div>
                                <span class="text-primary_100 text-[16px]">Tech Stacks</span>
                            </div>
                            <div>
                                <ul class="list-disc list-inside text-primary_200 text-[14px]">
                                    <li>ReactJS</li>
                                    <li>NextJS</li>
                                    <li>Tailwind CSS</li>
                                    <li>NodeJS</li>
                                    <li>ExpressJS</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="xl:w-2/5">
                    <div class="md:flex xl:h-1/2">
                        <div class="border-2 md:w-1/3">6</div>
                        <div class="border-2 md:w-2/3">7</div>
                    </div>
                    <div class="md:flex xl:h-1/2">
                        <div class="border-2 md:w-2/3">8</div>
                        <div class="border-2 md:w-1/3">9</div>
                    </div>
                    
                </div>
    
            </div>
            
        </div>
    </div>
    
</div>

