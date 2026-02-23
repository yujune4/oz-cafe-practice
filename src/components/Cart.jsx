import { useContext } from "react";
import { MenuContext } from "../context/menuContext";
import { CartContext } from "../context/cartContext";

function Cart() {
  const { menu } = useContext(MenuContext);
  const { cart, setCart } = useContext(CartContext);

  if (!menu) {
    return (
      <div style={{ textAlign: "center", margin: "80px" }}>
        메뉴 정보가 없습니다.
      </div>
    );
  }

  const allMenus = [...menu.커피, ...menu.논커피];

  return (
    <>
      <h2>장바구니</h2>
      <ul className="cart">
        {cart.length ? (
          cart.map((el) => {
            const item = allMenus.find((m) => m.id === el.id);

            return (
              <CartItem
                key={el.id}
                item={item}
                options={el.options}
                quantity={el.quantity}
                cart={cart}
                setCart={setCart}
              />
            );
          })
        ) : (
          <div className="no-item">
            장바구니에 담긴 상품이 없어요!
          </div>
        )}
      </ul>
    </>
  );
}

function CartItem({ item, options, quantity, cart, setCart }) {
  return (
    <li className="cart-item">
      <div className="cart-item-info">
        <img height={100} src={item.img} alt={item.name} />
        <div>{item.name}</div>
      </div>

      <div className="cart-item-option">
        {Object.keys(options).map((key) => (
          <div key={key}>
            {key} : {item.options[key][options[key]]}
          </div>
        ))}
        <div>개수 : {quantity}</div>
      </div>

      <button
        className="cart-item-delete"
        onClick={() => {
          setCart(cart.filter((el) => el.id !== item.id));
        }}
      >
        삭제
      </button>
    </li>
  );
}

export default Cart;

