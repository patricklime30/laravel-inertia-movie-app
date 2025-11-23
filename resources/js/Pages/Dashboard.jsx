import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Dashboard({ movies }) {
    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Dashboard
                    </h2>

                    <Link
                        href={route('movies.create')}
                        className="bg-blue-600 hover:bg-blue-700 font-semibold text-xs text-white uppercase px-4 py-2 rounded"
                    >
                        Create Movie
                    </Link>
                </div>

            }
        >
            <Head title="Dashboard" />

            <div className="mx-auto px-4 py-8">
               {/* Movie card here */}

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    
                    { movies.map((movie) => (
                        <div key={movie.id}
                            className="bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition transform duration-300">
                            <img src={ `/storage/${movie.image}` } alt={ movie.title } className="w-full h-64 object-cover"/>
        
                            <div className="p-4">
                                <h2 className="text-lg font-semibold text-gray-800">{ movie.title }</h2>
                                <p className="text-gray-400 text-sm mt-1">{ movie.description.slice(0, 80) + "..." }</p>
                                <p className="text-gray-400 text-xs mt-2">{movie.genre.split(',').join(' •')}</p>
                                <p className="text-gray-500 text-xs mt-2 font-semibold">{ movie.year }</p>
        
                                <Link className="mt-3 inline-block bg-blue-600 hover:bg-blue-700 font-semibold text-xs text-white uppercase px-4 py-2 rounded">
                                    Details
                                </Link>
                            </div>
                        </div>
                  
                    )) }

                </div>
     
            </div>
        </AuthenticatedLayout>
    );
}
