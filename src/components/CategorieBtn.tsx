import {
  faAward,
  faHamburger,
  faCoffee,
  faDrumstickBite,
  faIceCream,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import $ from "jquery";
import { useDispatch } from "react-redux";
import { addFilter, categories, deletFilter } from "../redux/ProductSlice";
const CategorieBtn = (props: { value: categories }) => {
  let icon = faQuestion;
  const dispatch = useDispatch();

  switch (props.value) {
    case "best seller":
      icon = faAward;

      break;
    case "Hamburger":
      icon = faHamburger;
      break;
    case "Drink":
      icon = faCoffee;
      break;
    case "Dessert":
      icon = faIceCream;
      break;
    case "Fried chicken":
      icon = faDrumstickBite;
      break;
  }
  const handelClick = (element: any) => {
    $(element.currentTarget).toggleClass("action");
    if ($(element.currentTarget).hasClass("action")) {
      dispatch(addFilter({ category: props.value }));
    } else {
      dispatch(deletFilter({ category: props.value }));
    }
  };

  return (
    <button
      className="rounded-5 btn btn-light h4 mx-2 btn-lg des-text-color border-1 border-secondary-subtle shadow-sm"
      onClick={(e) => handelClick(e)}
    >
      <FontAwesomeIcon icon={icon} className="me-2" />
      {props.value}
    </button>
  );
};

export default CategorieBtn;
