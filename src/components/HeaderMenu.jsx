import React, { Fragment } from "react";
import { Menu, Transition } from '@headlessui/react';
import HamburgerIcon from "./Icons/Hamburger";


const HeaderMenu = () => {
  return (
    <div className="block 2xl:hidden w-fit h-fit ml-30">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <HamburgerIcon />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >

          <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="p-10 whitespace-nowrap">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${active ? 'bg-blue-500 text-white' : 'text-gray-900'
                      } group flex rounded-md items-center w-full p-10 text-sm`}
                  >
                    POOLS
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="p-10 whitespace-nowrap">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${active ? 'bg-blue-500 text-white' : 'text-gray-900'
                      } group flex rounded-md items-center w-full p-10 text-sm`}
                  >
                    TOKEN CREATION
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="p-10 whitespace-nowrap">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${active ? 'bg-blue-500 text-white' : 'text-gray-900'
                      } group flex rounded-md items-center w-full p-10 text-sm`}
                  >
                    ABOUT
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="p-10 whitespace-nowrap">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${active ? 'bg-blue-500 text-white' : 'text-gray-900'
                      } group flex rounded-md items-center w-full p-10 text-sm`}
                  >
                    TOKEN LOCKER
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="block xl:hidden p-10 whitespace-nowrap">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${active ? 'bg-blue-500 text-white' : 'text-gray-900'
                      } group flex rounded-md items-center w-full p-10 text-sm`}
                  >
                    IGNITE DEFI
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default HeaderMenu;
