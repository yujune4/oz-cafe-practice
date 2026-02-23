import { useState, useContext } from "react";
import { MenuContext } from "../context/menuContext";
import { CartContext } from "../context/cartContext";
import Item from "./Item";
import OrderModal from "./OrderModal";

function Menu() {
  const { menu } = useContext(MenuContext);
  const { cart, setCart } = useContext(CartContext);

  const [modalOn, setModalOn] = useState(false);
  const [modalMenu, setModalMenu] = useState(null);

  if (!menu)
    return (
      <div style={{ textAlign: "center", margin: "80px" }}>
        메뉴 정보가 없어요!
      </div>
    );

  const categories = Object.keys(menu);

  return (
    <>
      {categories.map((category) => (
        <section key={category}>
          <h2>{category}</h2>
          <ul className="menu">
            {menu[category].map((item) => (
              <Item
                key={item.id}
                item={item}
                clickHandler={() => {
                  setModalMenu(item);
                  setModalOn(true);
                }}
              />
            ))}
          </ul>
        </section>
      ))}

      {modalOn && (
        <OrderModal
          modalMenu={modalMenu}
          setModalOn={setModalOn}
          cart={cart}
          setCart={setCart}
        />
      )}
    </>
  );
}

export default Menu;
