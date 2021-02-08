import Layout from '../components/layout'
import Header from '../components/header'
import Content from '../components/content';
import FaqItem from '../components/faqItem';
import Section from '../components/section';
import {getAllFaqs} from '../lib/api'
import customtheme from '../customtheme.js'
import { Flex, Text } from '@chakra-ui/core';
import Link from 'next/link'
import { useRouter } from 'next/router'
import CpcSeo from '../components/cpcseo'

export default function FaqPage({faqs}) {
    const {colors} = customtheme
    const router = useRouter()
    const path = process.env.NEXT_PUBLIC_BASE_URL + router.asPath

    return (
        <>
            <CpcSeo 
                title="Preguntas frecuentes al CPC - Comité de Participación Ciudadana de Chihuahua"
                description="Preguntas más frecuentes hechas al Comité de Participación Ciudadana de Chihuahua (CPC)."
                url={path}
                imageUrl={process.env.NEXT_PUBLIC_OPENGRAPH_IMAGE_URL}
            />
            <Layout >
                <Header position="fixed"/>
                <Content>
                    {/* Top SECTION */}
                    <Section bg="cpc.red" color="cpc.white">
                        <Text fontSize={["1.75em", "1.75em", "2em", "2em"]} fontFamily="cpc.gothamBold" 
                        fontWeight="300" textAlign="center" lineHeight={["1em", "1em", "1.18em", "1.18em"]} 
                        letterSpacing={["-.05em", "0", "0", "0"]} width={["100%", "80%", "80%", "75%"]}>
                            Preguntas frecuentes hechas al Comité de Participación Ciudadana
                        </Text>
                    </Section> 
                    <Flex bg="cpc.white" color="cpc.black">
                        <Flex direction={["column", "column", "column", "column"]} 
                        width={["100%","500px", "600px", "600px"]} justify="center" alignItems="center"
                        p="0px">
                            <Text color="cpc.black" 
                            pl={["1.5em", "1em", "1em", "1em"]}
                            pr={[".7em", "1em", "1em", "1em"]} 
                            pt={["1.5em", "1em", "1em", "1em"]} 
                            pb={["0.5em", "1em", "1em", "1em"]} 
                            fontFamily="cpc.gothamCondensedBook" 
                            fontSize={["1.3em", "1.3em", "1.4em", "1.4em"]} 
                            textAlign="left" 
                            lineHeight={["1.2em", "1.2em", "1.2em", "1.2em"]}>
                                Aquí vamos a estar resolviendo las preguntas más frecuentes que
                                nos hagan llegar al Comité de Participación Ciudadana de Chihuahua 
                                (CPC) tanto por {" "}
                                <Link href="https://buscador.plataformadetransparencia.org.mx/web/guest/buscadornacional?buscador=%22comit%C3%A9%20de%20participaci%C3%B3n%20ciudadana%22&coleccion=2">
                                <a className="redlink"> 
                                    Solicitudes de Transparencia 
                                </a>
                            </Link> como por la sección de {" "}
                            <Link href="/contacto">
                                <a className="redlink">
                                Contacto.
                                </a>
                            </Link>
                        </Text>
                    </Flex>
                    </Flex> 
                    <Flex bg="cpc.white" color="cpc.red">
                        <Flex direction="column" 
                        height="auto">
                            {faqs.map(faq => <FaqItem 
                                key={faq._id} 
                                question={faq.question} 
                                answer={faq.answer}/>)}
                        </Flex>
                    </Flex>
                </Content>
                <style jsx>{`
                    .redlink {
                        color: ${colors.cpc.red};
                        cursor: pointer;
                        text-decoration: underline;
                    }
                    .redText {
                        color: ${colors.cpc.red};
                    }
                `}
                </style>
            </Layout>
        </>
    )
}

//this functions run on build time on server.
//provides props to your page, and makes it static
export async function getStaticProps(){
    let faqs;
    try{
        const response = await getAllFaqs();
        faqs = response
    } catch(e){
        faqs = []
    }

    return {
        props: {
            faqs
        },
        revalidate: 10

    }

}
