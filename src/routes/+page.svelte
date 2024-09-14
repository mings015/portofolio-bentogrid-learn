<script lang="ts">
    import Icon from '@iconify/svelte';
</script>

<style>
    div :global(.color-icon) {
        color: #A291FD;
    }
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
                    <div class="flex flex-col gap-2">
                        <div class="flex flex-col items-center justify-start gap-4 p-3 rounded-lg bg-primary_500 h-1/3">
                            <div class="flex flex-col items-center justify-center flex-1 gap-4 text-center text-primary_200">
                                <p class="text-2xl">
                                    <span class="flex justify-center"><Icon icon="noto:waving-hand" /></span> Say hi from <span class="text-primary">Muhaimin</span>, Web Developer From Indonesia
                                </p>
                                <p class="text-primary_300">
                                    I design and code beautifully simple things and i love what i do. Just simple like that!
                                </p>
                            </div>
                            
                        </div>
                        <div class="flex flex-col items-center justify-start gap-2 p-3 rounded-lg bg-primary_500">
                            <div class="flex flex-col items-center">
                                <div class="flex items-center gap-2">
                                    <Icon icon="basil:bag-solid" class="color-icon" />
                                    <span class="text-primary_300 text-[14px]">Projects</span>
                                </div>
                                <div>
                                    <span class="text-primary_100 text-[16px]">Works Gallery</span>
                                </div>
                            </div>
                            <div class="flex flex-col items-center justify-center flex-1 gap-2 mb-4 h-1/2">
                                <div class="flex gap-2 overflow-y-auto snap-proximity text-primary_200 rounded-2xl">
                                  <img class="snap-center" src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" alt="">
                                  <img class="snap-center" src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" alt="">
                                  <img class="snap-center" src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" alt="">
                                  <img class="snap-center" src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" alt="">
                                </div>
  
                                  <!-- <div class="flex items-center justify-center gap-1 px-2 py-2 rounded-lg bg-primary_400">
                                      <Icon icon="tabler:click" class="color-icon" />
                                      <span class="text-sm text-primary_100">Click For Detail</span>
                                  </div> -->
                              </div>
                        </div>
                        <div class="flex flex-col items-center justify-start gap-1 p-3 rounded-lg max-h-60 bg-primary_500">
                            <div class="flex items-center gap-2">
                                <Icon icon="mdi:achievement-variant" class="color-icon" />
                                <span class="text-primary_300 text-[14px]">Achievement</span>
                            </div>
                            <div>
                                <span class="text-primary_200 text-[16px]">Awards and Achievements</span>
                            </div>
                            <div class="grid items-start justify-center w-full grid-cols-1 gap-2 mt-2 overflow-y-auto rounded-lg item text-primary_200">
                                <div class="flex flex-col flex-1 gap-1 px-5 py-3 rounded-lg bg-primary_400 text-primary_200">
                                    <div class="flex justify-between">
                                        <p>2st Winner of Kalla Future Leaders</p>
                                        <p>2024</p>
                                    </div>
                                    <p class="mb-2 text-primary">KALLA Group</p>
                                    
                                </div>

                                <div class="flex flex-col flex-1 gap-1 px-5 py-3 rounded-lg bg-primary_400 text-primary_200">
                                    <div class="flex justify-between">
                                        <p>Associate Data Scientist of VSGA</p>
                                        <p>2024</p>
                                    </div>
                                    <p class="mb-2 text-primary">Digital Talent Scholarship</p>
                                </div>

                                <div class="flex flex-col flex-1 gap-1 px-5 py-3 rounded-lg bg-primary_400 text-primary_200">
                                    <div class="flex justify-between">
                                        <p>Operator Komputer Madya of VSGA</p>
                                        <p>2024</p>
                                    </div>
                                    <p class="mb-2 text-primary">Digital Talent Scholarship</p>
                                </div>

                                <div class="flex flex-col flex-1 gap-1 px-5 py-3 rounded-lg bg-primary_400 text-primary_200">
                                    <div class="flex justify-between">
                                        <p>LKMM-TM2022 WilayahSulawesi Selatan</p>
                                        <p>2022</p>
                                    </div>
                                    <p class="mb-2 text-primary">Direktora tJenderal Pendidikan Tinggi</p>
                                </div>

                                
                                
                                
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col order-first gap-2 md:order-none"> 
                        <div class="flex flex-col h-full gap-4 p-4 rounded-lg justify-evenly bg-primary_500">
                            <div class="flex justify-between gap-4">
                                <div class="flex items-center gap-4">
                                    <img class="w-[100px] h-[100px] object-cover object-top	 rounded-lg" src="/foto.jpeg" alt="profile">
                                <div class="flex flex-col justify-between">
                                    <div class="flex items-center gap-2 px-4 py-2 rounded-full bg-primary_400">
                                        <span class="relative flex w-2 h-2">
                                            <span class="absolute inline-flex w-full h-full bg-green-400 rounded-full opacity-75 animate-ping"></span>
                                            <span class="relative inline-flex w-2 h-2 bg-green-500 rounded-full"></span>
                                        </span>
                                        <div class="text-sm text-primary_200">Available To Work</div>
                                    </div>
                                    <div class="text-[22px] text-primary_100">Muh. Muhaimin Nur</div>
                                    <div class="text-primary_200">Im <span class="text-primary">Front End Developer</span></div>
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
                                <span>
                                    <div class="flex items-center px-2 py-1 rounded-full bg-opacity-40 bg-primary_450">
                                        <Icon icon="ph:soccer-ball" class="color-icon" />
                                        <span class="ml-2">Football</span>
                                    </div>
                                </span>
                            </div>
                            <div class="flex items-center justify-center gap-3 text-primary_200"> 
                                <a class="flex items-center justify-center flex-1 gap-1 px-4 py-3 rounded-lg bg-primary_400" href="https://api.whatsapp.com/send/?phone=%2B6281342400303&text&type=phone_number&app_absent=0" target="_blank">
                                    <div class="flex items-center justify-center flex-1 rounded-lg bg-primary_400">
                                        <Icon icon="mingcute:whatsapp-fill" class="color-icon" />
                                        <span class="ml-2 text-sm">WhatsApp Me</span>
                                    </div>
                                </a>
                                <div class="flex items-center justify-center flex-1 gap-1 px-4 py-3 rounded-lg bg-primary_400">
                                    <Icon icon="ic:round-file-download" class="color-icon" />
                                    <span class="ml-2 text-sm">Resume</span>
                                </div>
                            </div>
                        </div>
                        <div class="grid grid-cols-2 gap-2 md:grid-cols-3 md:order-first h-1/3">
                            <div class="flex flex-col items-center gap-2 p-2 rounded-lg justify-evenly bg-primary_500">
                                <div class="flex items-center">
                                    <span class="text-5xl text-primary_300">12</span>
                                    <Icon icon="flowbite:plus-outline" class="color-icon" style="font-size: 24px;" />
                                </div>
                                <div class="flex items-center justify-center w-full gap-2 rounded-full bg-primary_400">
                                    <Icon icon="solar:flag-bold" class="color-icon" />
                                    <span class="my-1 text-xs text-primary_200">Project</span>
                                </div>
                            </div>
                            <div class="flex flex-col items-center gap-2 p-2 rounded-lg justify-evenly bg-primary_500">
                                <div class="flex items-center">
                                    <span class="text-5xl text-primary_300">9</span>
                                    <Icon icon="flowbite:plus-outline" class="color-icon" style="font-size: 24px;" />
                                </div>
                                <div class="flex items-center justify-center w-full gap-1 rounded-full bg-primary_400">
                                    <Icon icon="fa-solid:smile-beam" class="color-icon" />
                                    <span class="my-1 text-xs text-primary_200">Happy Clients</span>
                                </div>
                            </div>
                            <div class="flex flex-col items-center gap-2 p-2 rounded-lg justify-evenly bg-primary_500">
                                <div class="flex items-center">
                                    <span class="text-5xl text-primary_300">2</span>
                                    <Icon icon="flowbite:plus-outline" class="color-icon" style="font-size: 24px;" />
                                </div>
                                <div class="flex items-center justify-center w-full gap-1 rounded-full bg-primary_400">
                                    <Icon icon="solar:star-fall-bold" class="color-icon" />
                                    <span class="my-1 text-[10px] text-primary_200">Year Expertise</span>
                                </div>
                            </div>
                            <div class="flex flex-col items-center gap-2 p-2 rounded-lg justify-evenly bg-primary_500 md:hidden">
                                <div class="flex items-center justify-center flex-1 gap-2 px-4 py-3">
                                    <span class="text-primary_200">Resume</span>
                                    <Icon icon="ic:round-file-download" class="color-icon" />
                                </div>
                            </div>
                            
                        </div>
                        <div class="flex flex-col items-center justify-start gap-1 p-2 rounded-lg bg-primary_500">
                            <div class="flex items-center gap-2">
                                <Icon icon="solar:rocket-bold" class="color-icon" />
                                <span class="text-primary_300 text-[14px]">My Expertise</span>
                            </div>
                            <div>
                                <span class="text-primary_100 text-[16px]">Tech Stacks</span>
                            </div>
                            <div class="flex flex-wrap items-center justify-center gap-3 m-2">
                                <div class="p-2 rounded-lg bg-primary_400 ">
                                    <Icon icon="devicon:html5" style="font-size: 28px" />
                                </div>
                                <div class="p-2 rounded-lg bg-primary_400 ">
                                    <Icon icon="skill-icons:css" style="font-size: 28px" />
                                </div>
                                <div class="p-2 rounded-lg bg-primary_400 ">
                                    <Icon icon="logos:javascript" style="font-size: 28px" />
                                </div>
                                <div class="p-2 rounded-lg bg-primary_400 ">
                                    <Icon icon="logos:react" style="font-size: 28px" />
                                </div>
                                <div class="p-2 rounded-lg bg-primary_400 ">
                                    <Icon icon="devicon:tailwindcss" style="font-size: 28px" />
                                </div>
                                <div class="p-2 rounded-lg bg-primary_400 ">
                                    <Icon icon="logos:dart" style="font-size: 28px" />
                                </div>
                                <div class="p-2 rounded-lg bg-primary_400 ">
                                    <Icon icon="logos:flutter" style="font-size: 28px" />
                                </div>
                                <div class="p-2 rounded-lg bg-primary_400 ">
                                    <Icon icon="logos:firebase" style="font-size: 28px" />
                                </div>
                                <div class="p-2 rounded-lg bg-primary_400 ">
                                    <Icon icon="logos:php" style="font-size: 28px" />
                                </div>
                                <div class="p-2 rounded-lg bg-primary_400 ">
                                    <Icon icon="logos:laravel" style="font-size: 28px" />
                                </div>
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col gap-2 my-2 md:flex- xl:my-0 xl:w-2/5">
                    <div class="flex flex-col gap-2 md:flex-row md:flex xl:h-1/2">
                        <div class="flex flex-col gap-3 p-3 rounded-lg bg-primary_500 md:w-3/5">
                            <div class="flex flex-col items-center">
                              <div class="flex items-center gap-2">
                                <Icon icon="material-symbols-light:comedy-mask" class="color-icon" />
                                <span class="text-primary_300 text-[14px]">Experience</span>
                              </div>
                              <div>
                                <span class="text-primary_100 text-[16px]">Career Experience</span>
                              </div>
                            </div>
                            
                            <div class="grid items-start justify-center w-full grid-cols-1 gap-2 mt-2 overflow-y-auto rounded-lg item text-primary_200">
                                <div class="flex flex-col flex-1 gap-1 px-5 py-3 rounded-lg bg-primary_400 text-primary_200">
                                    <div class="">
                                        <p>Freelance</p>
                                        <p class="text-sm text-primary_300">December 2022 - Present</p>
                                    </div>
                                    <p class="mb-2 text-primary">Software House</p>
                                    
                                </div>

                                <div class="flex flex-col flex-1 gap-1 px-5 py-3 rounded-lg bg-primary_400 text-primary_200">
                                    <div class="">
                                        <p>Intern Field of Membership</p>
                                        <p class="text-sm text-primary_300">August 2022 - November 2022</p>
                                    </div>
                                    <p class="mb-2 text-primary">BPJS Ketenagakerjaan Makassar</p>
                                </div>
                            </div>

                          </div>
                        <div class="flex flex-col items-center justify-start gap-3 p-3 rounded-lg bg-primary_500 md:w-2/5">
                            <div class="flex flex-col items-center">
                                <div class="flex items-center gap-2">
                                    <Icon icon="solar:star-fall-bold" class="color-icon" />
                                    <span class="text-primary_300 text-[14px]">Work Process</span>
                                </div>
                                <div>
                                    <span class="text-primary_100 text-[16px]">Workflow Highlights</span>
                                </div>
                            </div>
                            
                                <div class="grid items-start justify-center w-full grid-cols-1 gap-2 overflow-y-auto item text-primary_200">
                                    <div class="flex items-center justify-start flex-1 gap-2 px-4 py-2 rounded-lg bg-primary_400">
                                        <Icon icon="mage:goals-fill" class="color-icon" style="font-size: 18px;" />
                                        <span class="text-sm">Define Your Site Goals</span>
                                    </div>
                                    <div class="flex items-center justify-start flex-1 gap-2 px-4 py-2 rounded-lg bg-primary_400">
                                        <Icon icon="dashicons:feedback" class="color-icon" style="font-size: 18px;" />
                                        <span class="text-sm">Ideas into a Wireframe</span>
                                    </div>
                                    <div class="flex items-center justify-start flex-1 gap-2 px-4 py-2 rounded-lg bg-primary_400">
                                        <Icon icon="mdi:canvas" class="color-icon" style="font-size: 18px;" />
                                        <span class="text-sm">Blank Canvas into Website </span>
                                    </div>
                                    <div class="flex items-center justify-start flex-1 gap-2 px-4 py-2 rounded-lg bg-primary_400">
                                        <Icon icon="material-symbols:feedback" class="color-icon" style="font-size: 18px;" />
                                        <span class="text-sm">Get Feedback</span>
                                    </div>
                                    <div class="flex items-center justify-start flex-1 gap-2 px-4 py-2 rounded-lg bg-primary_400">
                                        <Icon icon="grommet-icons:workshop" class="color-icon" style="font-size: 18px;" />
                                        <span class="text-sm">Make Sure It Works as Expected</span>
                                    </div>
                                    <div class="flex items-center justify-start flex-1 gap-2 px-4 py-2 rounded-lg bg-primary_400">
                                        <Icon icon="carbon:ibm-launchpad-s4" class="color-icon" style="font-size: 18px;" />
                                        <span class="text-sm">Launch the Website</span>
                                    </div>
                                    
                                </div>
                            
                        </div>
                    </div>
                    <div class="flex flex-col gap-2 md:flex md:flex-row xl:h-1/2">
                        <div class="flex flex-col items-center justify-start gap-2 py-3 rounded-lg px-7 md:px-4 bg-primary_500 md:w-2/5 ">
                            <div class="flex flex-col items-center">
                                <div class="flex items-center gap-2">
                                    <Icon icon="mingcute:user-follow-2-fill" class="color-icon" />
                                    <span class="text-primary_300 text-[14px]">Social Media</span>
                                </div>
                                <div>
                                    <span class="text-primary_100 text-[16px]">Online Presence</span>
                                </div>
                            </div>
                            <div class="flex flex-col items-center justify-center flex-1">
                                <div class="grid items-start justify-center w-full grid-cols-1 gap-4 item text-primary_200">
                                    <div class="flex items-start justify-start flex-1 gap-2 px-4 py-4 rounded-lg bg-primary_400">
                                        <Icon icon="pajamas:twitter" class="color-icon" style="font-size: 24px;" />
                                        <span class="text-sm">Muh Muhaimin Nur</span>
                                    </div>
                                    <div class="flex items-start justify-start flex-1 gap-2 px-4 py-4 rounded-lg bg-primary_400">
                                        <Icon icon="mdi:instagram" class="color-icon" style="font-size: 24px;"/>
                                        <span class="text-sm">@mingsssxz</span>
                                    </div>
                                    <div class="flex items-start justify-start flex-1 gap-2 px-4 py-4 rounded-lg bg-primary_400">
                                        <Icon icon="mdi:linkedin" class="color-icon" style="font-size: 24px;"/>
                                        <span class="text-sm">Muh Muhaimin Nur</span>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div class="flex flex-col items-center justify-center p-3 rounded-lg gap-7 bg-primary_500 md:w-3/5">
                            <div class="flex flex-col items-center justify-center">
                                <Icon icon="basil:bag-solid" class="color-icon" />
                                <span class="text-lg text-primary_300">lets Work Together</span>
                                <span class="text-sm text-primary_100">Let's Make Magic Happen Together!</span>
                            </div>
                            <div class="flex items-center justify-center gap-2 px-4 py-4 rounded-lg bg-primary_400">
                                <Icon icon="ic:baseline-email" class="color-icon" style="font-size: 24px;" />
                                <span class="text-sm text-primary_200">Email Me</span>
                            </div>
                            
                        </div>
                    </div>
                </div>
    
            </div>
            
        </div>
    </div>
    
</div>

