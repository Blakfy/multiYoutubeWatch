import { Button } from "@radix-ui/themes";
import { TrashIcon } from "@radix-ui/react-icons";

export default function ClearCookie() {
  const defaultCookie = () => {
    localStorage.clear();
    window.location.reload();
  };

  function clearMyCookie() {
    let text = "Are you sure you want to clear the cookie?";
    if (confirm(text) == true) {
      defaultCookie();
    } else {
      alert("You pressed Cancel!");
    }
  }

  return (
    <Button onClick={() => clearMyCookie()} variant="soft">
      <TrashIcon className="cursor-pointer" />
      Clear Cookie / Reset
    </Button>
  );
}
