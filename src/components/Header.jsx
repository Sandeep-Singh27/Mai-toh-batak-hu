import Nav from "./Nav";

function Header() {
  return (
    <div className="flex flex-row bg-blue-600 items-center w-1/1 h-1/12 border-1 border-white sticky top-0">
        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fbeautiful%2F&psig=AOvVaw1z_T1wyP2bJOyEhW36Td3E&ust=1754112204416000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCPj9nqjv6I4DFQAAAAAdAAAAABAE" className="pl-2 h-full" alt="hello"/>
        <h1 className="text-5xl text-white p-3 text-center font-mono font-bold ">
          IamGoose.com
        </h1>
        <Nav />
    </div>
  );
}
export default Header;
