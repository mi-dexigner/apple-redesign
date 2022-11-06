import { 
    createClient, 
    createPreviewSubscriptionHook,
    // createImageUrlBuilder,
    // createPortableTextComponent
  } from "next-sanity";
  import createImageUrlBuilder from "@sanity/image-url";


  const config ={
    dataset:process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    token:process.env.SANITY_API_TOKEN,
    projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion:"2021-10-22",
    useCdn:false
  }
  
  export const sanityClient = createClient(config)
  
  export const usePreviewSubscription = createPreviewSubscriptionHook(config);
  
  // export const urlFor = (source)=>createImageUrlBuilder(config).image(source)
  export const urlFor = (source) => createImageUrlBuilder(config).image(source);

  
  // export const PortableText = createPortableTextComponent({
  //   ...config,
  //   serializers:{}
  // })