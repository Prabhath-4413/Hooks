import "./App.css";
import HookSlider from "./components/hookslider";
import UseStateDemo from "./hooks/UseState";
import UseEffectDemo from "./hooks/UseEffect";
import UseRefDemo from "./hooks/UseRef";
import UseReducerDemo from "./hooks/UseReducer";
import UseCallbackDemo from "./hooks/UseCallback";
import UseMemoDemo from "./hooks/UseMemo";
import UseLayoutEffectDemo from "./hooks/UseLayoutEffect";
import UseContextDemo from "./hooks/UseContext";
import ForwardRefDemo from "./hooks/ForwardRef";
import UseImperativeHandleDemo from "./hooks/UseImperativeHandle";

function App() {
  const slides = [
    { key: "useState", Component: UseStateDemo },
    { key: "useEffect", Component: UseEffectDemo },
    { key: "useRef", Component: UseRefDemo },
    { key: "useReducer", Component: UseReducerDemo },
    { key: "useCallback", Component: UseCallbackDemo },
    { key: "useMemo", Component: UseMemoDemo },
    { key: "useLayoutEffect", Component: UseLayoutEffectDemo },
    { key: "useContext", Component: UseContextDemo },
    { key: "forwardRef", Component: ForwardRefDemo },
    { key: "useImperativeHandle", Component: UseImperativeHandleDemo },
  ];

  return (
    <div className="app" style={{ backgroundColor: "#f4f7fb" }}>
      <h1 className="title">React Hooks Slider</h1>
      <HookSlider slides={slides} />
    </div>
  );
}

export default App;

