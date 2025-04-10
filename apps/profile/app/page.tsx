import { Counter } from './components/Counter'
import { axiosInstance } from '@acme/utils';

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-8">Docs App</h1>
      <Counter />
    </main>
  )
} 