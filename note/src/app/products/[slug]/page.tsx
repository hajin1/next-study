import { notFound } from "next/navigation"

type Props = {
    params: {
        slug: string; // 폴더이름이 키가 됨 
    }
}

export default function PantsPage({params}: Props) {
    if(params.slug === 'nothing') {
        notFound()
    }
    return <h1>{params.slug} 바지 제품 설명 페이지</h1>
}

// dynamic routing 환경에서 미리 만들어두고 싶은 페이지의 경로를 설정할 수 있다. 
export function generateStaticParams() {
    const products = ['pants', 'skirt']
    return products.map(product => {
        slug: product
    })
}