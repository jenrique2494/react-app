import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import { products } from "../data/products";

const product = products[0];


export const ShoppingPage = () => {


    return (
        <div>
            <h1>shopping Store</h1>
            <hr/>
            <div>
                <ProductCard 
                    product={ product} 
                    key={product.id}
                    initialValues={{
                        count:4,
                        maxCount:10,
                    }}
                >
                    {
                        ({count,maxCount,reset,increaseBy, isMaxCountReached})=>(
                            <>
                                <ProductImage />
                                <ProductTitle />
                                <ProductButtons />
                            </>
                        )
                    }
                </ProductCard>
            </div>
        </div>
    )
}
