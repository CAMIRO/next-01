'use client'
import { useRouter } from "next/navigation";

function AboutPage() {
    const router = useRouter()
    return <section>
        <h1>About Page</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat perferendis dolor optio odit quam, quis ullam iste quod consequuntur aspernatur minima et deleniti recusandae totam sint repellendus itaque ratione reiciendis qui dolorum ipsam numquam rerum exercitationem. Totam voluptatibus veritatis, nihil quo commodi maxime ex ipsum illum, molestiae officiis incidunt maiores cumque est neque quod placeat, similique fuga id omnis tempore sint excepturi voluptate quas reprehenderit. Accusamus quaerat corrupti, perspiciatis unde vero, sequi velit accusantium a, magnam iusto laudantium ad labore consequatur qui mollitia ducimus nostrum animi voluptatem nulla possimus. Debitis sint aut dolorem placeat. Repudiandae id ut quam et assumenda?</p>
        <button 
            className="bg-sky-400 px-3 py-2 rounded-md"
            onClick={() => {
                alert('routing!')
                router.push('/')
            }}
        >
            Click
        </button>
    </section>
}

export default AboutPage