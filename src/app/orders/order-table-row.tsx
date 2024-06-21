import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { TableCell, TableRow } from "@/components/ui/table";
import { ArrowRight, Search, X } from "lucide-react";
import { OrderDetails } from "./order-details";

export function OrderTableRow() {
    return (
        <TableRow>
            <TableCell>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant='outline' size='xs'>
                            <Search className="w-3 h-3" />
                            <span className="sr-only">Detalhes do pedido</span>
                        </Button>
                    </DialogTrigger>
                    <OrderDetails />
                </Dialog>
            </TableCell>
            <TableCell className="font-sans text-xs font-medium">
                136732h3qgb313
            </TableCell>
            <TableCell className="text-muted-foreground">
                Há 15 minutos
            </TableCell>
            <TableCell>
                <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-slate-400" />
                    <span className="font-medium text-muted-foreground">Pendente</span>
                </div>
            </TableCell>
            <TableCell className="font-medium">
                Mauricio Junior
            </TableCell>
            <TableCell className="font-medium text-muted-foreground">
                R$ 149,90
            </TableCell>
            <TableCell>
                <Button variant='outline' size='xs'>
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Aprovar
                </Button>
            </TableCell>
            <TableCell>
                <Button variant='outline' size='xs'>
                    <X className="w-4 h-4 mr-2" />
                    Cancelar
                </Button>
            </TableCell>
        </TableRow>
    )
}