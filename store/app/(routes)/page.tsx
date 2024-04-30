import Container from "@/components/ui/container";
import Billboard from "@/components/billboard";
import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";

export const revalidate = 0;

const HomePage = async () => {
    const billboard = await getBillboard('70ef945a-30ce-4411-ae8b-85b89b43a45e');
    const products = await getProducts({ isFeatured: true })
    return (
        <Container>
            <div className="pb-10 space-y-10">
                <Billboard data={billboard} />
                <div className="flex flex-col px-4 gap-y-8 sm:px-6 lg:px-8">
                    <ProductList title="Featured Products" items={products} />
                </div>
            </div>
        </Container>
    )
}

export default HomePage;