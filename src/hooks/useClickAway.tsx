import { useEffect } from "react";

/**
 * Hook that detect the clicks outside of the passed ref
 */
const useClickAway = (callback: any, isOpen: boolean, ref: any)  => {
  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (isOpen && ref.current && !ref.current.contains(e.target)) {
        callback(false)
      }
    }
    document.addEventListener("mousedown", checkIfClickedOutside)
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [isOpen, callback, ref])

};

export default useClickAway;