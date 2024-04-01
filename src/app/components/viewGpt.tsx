 "use client";
// import React, { useState } from "react";
// import { Textarea } from "./ui/textarea";
// import { Card, CardContent, CardHeader } from "./ui/card";
// import { Button } from "./ui/button";
// import { Loader2, Send } from "lucide-react";

// type Props = {};

// export default function ViewGPT({}: Props) {

//   const [prompt, setPrompt] = React.useState("");
//   const [loading, setLoading] = React.useState(false);
//   const [response, setResponse] = React.useState("");

//   const handlePromptRequest = async () => {
//     setLoading(true);
//     const res = await fetch("/api/gpt", {
//       method: "POST",
//       body: JSON.stringify({ recipe: prompt }),
//     });
//     const responseJson = await res.json();
//     console.log("responseJson", responseJson);

//     setResponse(responseJson.gpt);
//     setPrompt("");
//     setLoading(false);
//   };

//   return (
//     <div className="flex justify-center items-center">
//       <Card className="w-full lg:w-[100%]">
//         <CardHeader>
//           <Textarea
//             placeholder="Enter your prompt here"
//             value={prompt}
//             onChange={(e) => setPrompt(e.currentTarget.value)}
//           />
//           <div className="w-full flex justify-end py-2">
//             {prompt.length > 0 ? (
//               <Button onClick={handlePromptRequest} className="bg-black text-white">
//                 <Send size={15} className="mr-2" /> Send
//               </Button>
//             ) : (
//               <Button onClick={handlePromptRequest} disabled className="bg-black text-white">
//                 <Send size={15} className="mr-2" /> Send
//               </Button>
//             )}
//           </div>
//         </CardHeader>
        
//         <CardContent className="flex justify-center items-center p-6">
          
//           {loading ? (
//             <Loader2 size={28} className="animate-spin"/>
//           ) : (
//             <div className="flex justify-start w-full">
//               {response && (
//                 <div className="py-3 px-6 bg-slate-100 w-full rounded-md shadow-md">
//                   <h1 className="text-xl text-center py-3 font-semibold">
//                     Nutrition Facts
//                   </h1>
                    
//                   <div className="text-left">
                  
//                     {response.split("\n").map((item, index) => {
//                       return (
//                         <p key={index} className="py-1 text-[14px]">
//                           {item}
//                         </p>
//                       );
//                     })}
                    
//                   </div>
//                 </div>
//               )}
//             </div>
//           )}
//         </CardContent>
//       </Card>
//     </div>
//   );
// }


import React, { useState } from "react";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Loader2, Send } from "lucide-react";

type Props = {};

export default function ViewGPT({}: Props) {
  const [prompt, setPrompt] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [response, setResponse] = React.useState("");
  const [error, setError] = React.useState<string | null>(null); // Add state for error handling
  
  async function handlePromptRequest() {
    setLoading(true);
    setError(null); // Clear any previous errors

    try {
      const res = await fetch("/api/gpt", {
        method: "POST",
        body: JSON.stringify({ recipe: prompt }),
      });

      // Check for successful response status
      if (!res.ok) {
        throw new Error(`API request failed with status ${res.status}`);
      }

      const responseJson = await res.json();
      console.log("responseJson", responseJson);

      setResponse(responseJson.gpt);
    } catch (error) {
      console.error("Error fetching response:", error);
      setError("Failed to fetch response"); // Set a generic error message if details are unavailable
    } finally {
      setLoading(false);
    }

    // Clear the prompt after sending
    setPrompt("");
  }
   
  return (
        <div className="flex justify-center items-center">
          <Card className="w-full lg:w-[100%] border-black hover:border-gray-400 border-2">
            <CardHeader>
              <Textarea
                placeholder="Enter your prompt here"
                value={prompt}
                onChange={(e) => setPrompt(e.currentTarget.value)}
                className="border-black hover:border-gray-400"
              />
              <div className="w-full flex justify-end py-2">
                {prompt.length > 0 ? (
                  <Button onClick={handlePromptRequest} className="bg-black text-white">
                    <Send size={15} className="mr-2" /> Send
                  </Button>
                ) : (
                  <Button onClick={handlePromptRequest} disabled className="bg-black text-white">
                    <Send size={15} className="mr-2" /> Send
                  </Button>
                )}
              </div>
            </CardHeader>
            
            <CardContent className="flex justify-center items-center p-6">
              
              {loading ? (
                <Loader2 size={28} className="animate-spin"/>
              ) : (
                <div className="flex justify-start w-full">
                  {response && (
                    <div className="py-3 px-6 bg-slate-100 w-full rounded-md shadow-md">
                      <h1 className="text-xl text-center py-3 font-semibold">
                        Nutrition Facts
                      </h1>
                        
                      <div className="text-left">
                      
                        {response.split("\n").map((item, index) => {
                          return (
                            <p key={index} className="py-1 text-[14px]">
                              {item}
                            </p>
                          );
                        })}
                        
                      </div>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      );
 
}