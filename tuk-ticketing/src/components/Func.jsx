import {useRef, useEffect} from 'react';

export default function App() {
  const ref = useRef(null);

  useEffect(() => {
    // 👇️ use document.getElementById()
    // const el = document.getElementById('my-element');
    // console.log(el);

    // 👇️ (better) use a ref
    const el2 = ref.current;
    console.log(el2);
  }, []);

  return (
    <div>
      <h2 ref={ref} id="my-element">
        Some pussy
      </h2>
    </div>
  );
}
