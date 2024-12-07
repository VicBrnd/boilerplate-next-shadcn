"use client";

import { Button } from "@/components/ui/button";
import { AlertCircle, HelpCircle, Home } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ErrorPage({ error }: { error?: Error }) {
  const router = useRouter();

  const errorMessage =
    error?.message ||
    "Il semble que nous ayons rencontré un problème. Nous nous excusons pour le désagrément.";

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="animate-bounce">
          <AlertCircle className="mx-auto h-24 w-24 text-red-500" />
        </div>
        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
          Oops! Une erreur s'est produite
        </h2>
        <p className="mt-2 text-sm text-gray-600">{errorMessage}</p>
        <div className="mt-8 space-y-4">
          <Button onClick={() => router.push("/")} className="w-full">
            <Home className="mr-2 h-4 w-4" /> Retour à l'accueil
          </Button>
          <Button
            onClick={() => router.push("/contact")}
            variant="outline"
            className="w-full"
          >
            <HelpCircle className="mr-2 h-4 w-4" /> Besoin d'aide ?
          </Button>
        </div>
        <div className="mt-6 text-xs text-gray-400">
          Statut réseau : <span className="text-green-500">●</span> Opérationnel
        </div>
      </div>
    </div>
  );
}
