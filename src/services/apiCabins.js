import supabase, { supabaseUrl } from './supabase';
export async function getCabins()
{
    
const { data, error } = await supabase
.from('cabins')
.select('*')
if(error)
{
    console.error(error);
    throw new Error('cabins could not be loaded')
}
return data;
}

export async function createCabin(newCabin)
{
    const imageName=`${Math.random()}-${newCabin.image.name}`.replaceAll("/","");
    const imagePath=`${supabaseUrl}/storage/v1/object/public/images/${imageName}`;

    const { data, error } = await supabase
    .from('cabins')
    .insert([{...newCabin, image: imagePath}])
    .select()
    if(error)
        {
            console.error(error);
            throw new Error('cabin could not be created')
        }

        const { error:storageError } = await supabase
        .storage
        .from('cabin-images')
        .upload(imageName, newCabin.image[0])

        if(storageError)
        {
            await supabase
            .from('cabins')
            .delete()
            .eq('id', data.id);
            throw new Error('image could not be uploaded')
        }
        return data;
  
}

export async function deleteCabin(id)
{
   
const { data,error } = await supabase
.from('cabins')
.delete()
.eq('id', id);

if(error)
{
    console.error(error);
    throw new Error('cabin could not be deleted')
}
return data;
}