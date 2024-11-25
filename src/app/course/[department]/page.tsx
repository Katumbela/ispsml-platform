export default function NotFoundDepartment() {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="text-center p-8 bg-white shadow-lg rounded-lg">
                <h1 className="text-4xl font-semibold mb-4">Departamento não encontrado</h1>
                <p className="text-lg text-gray-700">Desculpe, não conseguimos encontrar o departamento que você está procurando.</p>
                <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
                    Voltar para a página inicial
                </button>
            </div>
        </div>
    );
}