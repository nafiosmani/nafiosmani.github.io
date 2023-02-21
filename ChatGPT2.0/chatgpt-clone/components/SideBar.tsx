import NewChat from '../components/NewChat';

function SideBar() {
  return (
    <div className="p-2 flex flec-col h-screen">
        <div className="flex-1">
            <div>

                {/* NewChat */}
                <NewChat />

                <div>

                    {/* ModelSelection */}

                </div>

                {/* Map through the ChatRows */}

            </div>
        </div>
    </div>
  )
}

export default SideBar;