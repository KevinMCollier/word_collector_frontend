import TagsList from '../components/TagList';

const Sidebar = () => {
  console.log("Rendering TagsList in Sidebar");

  return (
    <div className="bg-gray-200 h-screen w-1/6 min-w-[200px] fixed flex flex-col items-start p-4">
      {/* Create a gray sidebar that covers the vertical height of the screen and approx. 1/6 width of the screen */}
      {/* Include names of tags (backend -> context API) */}

      <div className="flex justify-center w-full mb-6">
        <div>User Avatar</div>
      </div>

      <div className="mb-4">
        <div>Recent Categories</div>
      </div>

      <div className="mb-4">
        <div>My Categories</div>
        <TagsList />
      </div>

      <div className="mb-4">
        <div>Recommended Categories</div>
      </div>
    </div>
  )
}

export default Sidebar;
