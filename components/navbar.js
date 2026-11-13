"use client";

import { Fragment } from "react";
import { Menu, Transition, Disclosure } from "@headlessui/react";
import Image from "next/image";
import cx from "clsx";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { buildNavbarMenus } from "@/lib/navLinks";

export default function Navbar({ types }) {
  const { leftmenu, rightmenu } = buildNavbarMenus(types);
  const mobilemenu = [...leftmenu, ...rightmenu];

  return (
      <>
        <div large="true" className="shadow-md py-0 lg:py-1 " alt ="true">
          <nav>
            <Disclosure>
              {({open}) => (
                  <>
                    <div className="flex flex-wrap justify-center md:flex-nowrap md:gap-10">
                      <div className="flex w-full items-center justify-between md:w-auto">
                        <a href="/" className="w-28 dark:hidden">
                          <Image
                              src={`${process.env.NEXT_PUBLIC_PICTURE_PATH}common/logo-equidico-512.png`}
                              alt="Logo ÉQUIDICO"
                              priority={true}
                              sizes="(max-width: 50%) 100vw, 200px"
                              width={`50`}
                              height={`50`}
                          />
                        </a>

                        <Disclosure.Button
                            aria-label="Ouvrir le menu"
                            className="ml-auto rounded-md px-2 py-1 text-custom-blue focus:text-blue-500 focus:outline-none dark:text-gray-300 md:hidden ">
                          <svg
                              className="h-6 w-6 fill-current"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24">
                            {open && (
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                                />
                            )}
                            {!open && (
                                <path
                                    fillRule="evenodd"
                                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                                />
                            )}
                          </svg>
                        </Disclosure.Button>
                      </div>
                      <div
                          className="order-1 hidden w-full flex-col items-center justify-start md:order-none md:flex md:w-auto md:flex-row md:justify-end">
                        {leftmenu.map((item, index) => (
                            <Fragment key={`${item.label}${index}`}>
                              {item.children && item.children.length > 0 ? (
                                  <DropdownMenu
                                      menu={item}
                                      items={item.children}
                                  />
                              ) : (
                                  <a
                                      href={item.href}
                                      className="px-5 py-2 text-sm font-medium text-custom-blue hover:text-custom-red dark:text-gray-400"
                                      target={item.external ? "_blank" : undefined}
                                      rel={item.external ? "noopener" : undefined}>
                                    {item.label}
                                  </a>
                              )}
                            </Fragment>
                        ))}
                        {rightmenu.map((item, index) => (
                            <Fragment key={`${item.label}${index}`}>
                              {item.children && item.children.length > 0 ? (
                                  <DropdownMenu
                                      menu={item}
                                      items={item.children}
                                  />
                              ) : (
                                  <a
                                      href={item.href}
                                      className="px-5 py-2 text-sm font-medium text-custom-blue hover:text-custom-red dark:text-gray-400"
                                      target={item.external ? "_blank" : undefined}
                                      rel={item.external ? "noopener" : undefined}>
                                    <span>{item.label}</span>
                                  </a>
                              )}
                            </Fragment>
                        ))}
                      </div>
                    </div>
                    <Disclosure.Panel>
                      <div className="order-2 -ml-4 mt-4 flex w-full flex-col items-center justify-start md:hidden">
                        {mobilemenu.map((item, index) => (
                            <Fragment key={`${item.label}${index}`}>
                              {item.children && item.children.length > 0 ? (
                                  <DropdownMenu
                                      menu={item}
                                      items={item.children}
                                      mobile={true}
                                  />
                              ) : (
                                  <a
                                      href={item.href}
                                      className="w-full px-5 py-2 text-sm font-medium text-custom-blue hover:text-custom-red dark:text-gray-400"
                                      target={item.external ? "_blank" : undefined}
                                      rel={item.external ? "noopener" : undefined}>
                                    {item.label}
                                  </a>
                              )}
                            </Fragment>
                        ))}
                      </div>
                    </Disclosure.Panel>
                  </>
              )}
            </Disclosure>
          </nav>
        </div>
      </>
  );
}

const DropdownMenu = ({menu, items, mobile}) => {
  return (
      <Menu
          as="div"
          className={cx("relative text-left", mobile && "w-full")}>
        {({open}) => (
            <>
              <Menu.Button
                  className={cx(
                      "flex items-center gap-x-1 rounded-md px-5 py-2 text-sm font-medium  outline-none transition-all focus:outline-none focus-visible:text-indigo-500 focus-visible:ring-1 dark:focus-visible:bg-gray-800",
                      open
                          ? "text-blue-500 hover:text-custom-red"
                          : " text-custom-blue dark:text-gray-400 ",
                      mobile ? "w-full px-4 py-2 " : "px-4 py-2"
                  )}>
                <span>{menu.label}</span>
                <ChevronDownIcon className="mt-0.5 h-4 w-4"/>
              </Menu.Button>
              <Transition
                  as={Fragment}
                  enter="lg:transition lg:ease-out lg:duration-100"
                  enterFrom="lg:transform lg:opacity-0 lg:scale-95"
                  enterTo="lg:transform lg:opacity-100 lg:scale-100"
                  leave="lg:transition lg:ease-in lg:duration-75"
                  leaveFrom="lg:transform lg:opacity-100 lg:scale-100"
                  leaveTo="lg:transform lg:opacity-0 lg:scale-95">
                <Menu.Items
              className={cx(
                "z-20 origin-top-left rounded-md  focus:outline-none  lg:absolute lg:left-0  lg:w-56",
                !mobile && "bg-white shadow-lg  dark:bg-gray-800"
              )}>
              <div className={cx(!mobile && "py-3")}>
                {items.map((item, index) => (
                  <Menu.Item as="div" key={`${item.title}${index}`}>
                    {({ active }) => (
                      <a
                        href={item?.path ? item.path : "#"}
                        className={cx(
                          "flex items-center space-x-2 px-5 py-2 text-sm lg:space-x-4",
                          active
                            ? "text-blue-500"
                            : "text-custom-red hover:text-custom-blue focus:text-blue-500 dark:text-gray-300"
                        )}>
                        <span>{item.title}</span>
                      </a>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};
