import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import { products } from "../data/products";
import "../styles/custom-styles.css";
import { useShoppingCart } from '../hooks/useShoppingCart';


export const ShoppingPage = () => {

    const {shoppingCart, onProductCountChange} = useShoppingCart();

    return (
        <div>
            <h1>shopping Store</h1>
            <hr/>
            <div style={{
                display:"flex",
                flexDirection:"row",
                flexWrap:"wrap"
            }}>
                {
                    products.map(product=>(
                        <ProductCard 
                            product={ product} 
                            className="bg-dark text-white"
                            key={product.id}
                            onChange={ onProductCountChange }
                            value={shoppingCart[product.id]?.count || 0}
                        >
                            <ProductImage className="custom-image" />
                            <ProductTitle className="text-bold"/>
                            <ProductButtons className="custom-buttons" />
                        </ProductCard>
                    ))
                }
            </div>
            <div className="shopping-card">
                {
                Object.entries(shoppingCart).map(([key,product])=>(
                <ProductCard 
                    key={key}
                    product={ product} 
                    className="bg-dark text-white"
                    style={{
                        width:'100px'
                    }}
                    onChange={ onProductCountChange }
                    value={product.count}
        
                >
                    <ProductImage className="custom-image" />
                    <ProductButtons 
                    className="custom-buttons" 
                    style={{
                        display:'flex',
                        justifyContent:'center'
                    }}
                    />
                </ProductCard>))
                }
                
            </div>
        </div>
    )
}
