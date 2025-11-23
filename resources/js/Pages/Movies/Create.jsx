import { useForm, Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import PrimaryButton from '@/Components/PrimaryButton';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        description: '',
        genre: '',
        year: '',
        image: null
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('movies.store'), {
            forceFormData: true,  //tell Inertia to send multipart/form-data
        });
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Create Movie
                </h2>
            }
        >
            <Head title="Create Movie" />

            <div className="py-6 max-w-4xl mx-auto sm:px-6 lg:px-8">
                <div className='bg-white shadow sm:rounded-lg p-6'>

                    <form onSubmit={submit} className="space-y-4">
                        <div>
                            <InputLabel htmlFor="title" value="Title" />
        
                            <TextInput
                                name="title"
                                value={data.title}
                                className="mt-1 block w-full"
                                isFocused={true}
                                onChange={(e) => setData('title', e.target.value)}
                                required
                            />
        
                            <InputError message={errors.title} className="mt-2" />
                        </div>

                        <div>
                            <InputLabel htmlFor="description" value="Description" />
                            
                            <textarea
                                name="description"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring focus:ring-indigo-200"
                                value={data.description}
                                onChange={(e) => setData('description', e.target.value)}
                                required
                            />

                            <InputError message={errors.description} className="mt-2" />
                        </div>

                        <div>
                            <InputLabel htmlFor="genre" value="Genre" />
        
                            <TextInput
                                name="genre"
                                value={data.genre}
                                className="mt-1 block w-full"
                                isFocused={true}
                                onChange={(e) => setData('genre', e.target.value)}
                                required
                            />
        
                            <InputError message={errors.genre} className="mt-2" />
                        </div>

                        <div>
                            <InputLabel htmlFor="year" value="Release Year" />
        
                            <TextInput
                                name="year"
                                value={data.year}
                                className="mt-1 block w-full"
                                isFocused={true}
                                onChange={(e) => setData('year', e.target.value)}
                                required
                            />
        
                            <InputError message={errors.year} className="mt-2" />
                        </div>

                        <div>
                            <InputLabel htmlFor="upload_image" value="Upload Image" />
        
                            <TextInput
                                type="file"
                                name="image"
                                className="mt-1 block w-full"
                                isFocused={true}
                                onChange={(e) => setData('image', e.target.files[0])}
                                required
                            />
        
                            <InputError message={errors.image} className="mt-2" />
                        </div>

                        <PrimaryButton disabled={processing}>
                            Save Movie
                        </PrimaryButton>
                    </form>

                </div>
                
            </div>
        </AuthenticatedLayout>
    );
}
