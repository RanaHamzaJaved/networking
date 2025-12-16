import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const friends = [
    { name: "Sarah Smith", tag: "@sarah", img: "/users/sarah.jpg" },
    { name: "Michael Brown", tag: "@michael", img: "/users/michael.jpg" },
    { name: "David Wilson", tag: "@david", img: "/users/david.jpg" },
];

export function FriendSuggestions() {
    return (
        <Card className="rounded-2xl">
            <CardContent className="p-5">
                <h3 className="mb-4 text-base font-semibold tracking-tight">
                    Friend Suggestions
                </h3>

                <div className="space-y-4">
                    {friends.map((f, idx) => (
                        <div
                            key={idx}
                            className="
                                flex
                                items-center
                                justify-between
                                rounded-xl
                                px-2
                                py-2
                                transition-colors
                                hover:bg-muted/50
                            "
                        >
                            <div className="flex items-center gap-3">
                                <Avatar className="h-10 w-10">
                                    <AvatarImage src={f.img} />
                                    <AvatarFallback>
                                        {f.name.charAt(0)}
                                    </AvatarFallback>
                                </Avatar>

                                <div className="leading-tight">
                                    <p className="text-sm font-medium">
                                        {f.name}
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                        {f.tag}
                                    </p>
                                </div>
                            </div>

                            {/* <Button
                                variant="outline"
                                size="sm"
                                className="btn-gradient-primary rounded-full px-4 text-xs font-semibold"
                            >
                                Add
                            </Button> */}
                            <button className="btn-gradient-primary flex rounded-full text-sm! px-4 py-2">
                                Add
                            </button>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
