import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, X } from "lucide-react";

export function OrderTableFilters() {
    return (
        <form className="flex lg:flex-row lg:items-center gap-3 flex-col  ">
            <span className="text-lg font-semibold">Filtros</span>
            <Input placeholder="Id do pedido" className="h-8 w-auto" />
            <Input placeholder="Nome do cliente" className="h-8 w-auto" />
            <Select defaultValue="all">
                <SelectTrigger className="h-8 w-auto">
                    <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">Todos</SelectItem>
                    <SelectItem value="pending">Pendente</SelectItem>
                    <SelectItem value="canceled">Cancelado</SelectItem>
                    <SelectItem value="processing">Em processo</SelectItem>
                    <SelectItem value="delivering">Em entrega</SelectItem>
                    <SelectItem value="delivered">Entregue</SelectItem>
                </SelectContent>
            </Select>
            <Button type="submit" variant='secondary' size='xs'>
                <Search className="h-4 w-4 mr-2" />
                Filtrar resultados
            </Button>
            <Button type="button" variant='outline' size='xs'>
                <X className="h-4 w-4 mr-2" />
                Remover filtros
            </Button>
        </form>
    )
}