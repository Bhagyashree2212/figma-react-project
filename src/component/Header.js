
function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white">
      {/* Logo */}
      <div className="flex items-center gap-2 text-2xl font-bold text-orange-500">
        <span>⊙⊙</span>
        <span>DavaDay</span>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-6">
        <div className="text-sm text-right">
          <p className="text-gray-400 text-xs">Deliver to</p>
          <p className="text-gray-700 font-medium">Mumbai - 400001</p>
        </div>
        <div className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-600 text-white">
          R
        </div>
        <div className="relative">
          🛒
          <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
            3
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;












// const Header = ()=>{





//     return (
//     <>    
//     <h1>Header</h1>

   
//     <div >




        
//     </div>
    
//     </>

//     )




// }
// export default Header;
