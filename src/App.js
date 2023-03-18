import AppRouter from "./router/AppRouter";
// import { RouterProvider } from "react-router-dom";
// import { router } from "./router/router";
import "./App.scss"

function App() {
  return (
    // <RouterProvider
    //   router={router}
    //   fallbackElement={<div>Loading...</div>}
    // />// yeni versiyonla oluşturulmuş router yapısı
    <AppRouter /> // eski versiyon
  );
}

export default App;
