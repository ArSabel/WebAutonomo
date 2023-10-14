
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Función para crear un nuevo Supplier
const createSupplier = async () => {
    const supplierCreated = await prisma.supplier.create({
        data: {
            name: "New Supplier"
        }
    });
    console.log(supplierCreated);
}

// Función para crear un nuevo Item
const createItem = async () => {
    const itemCreated = await prisma.item.create({
        data: {
            name: "Nuevo artículo",
            description: "Descripción del artículo",
            price: 20.0
        }
    });
    console.log(itemCreated);
}

// Función para crear una nueva Purchase
const createPurchase = async () => {
    const purchaseCreated = await prisma.purchase.create({
        data: {
            date: new Date(),
            supplierId: 1,  // Asume que existe un Supplier con id 1
            items: {
                create: [
                    {
                        itemId: 1,  // Asume que existe un Item con id 1
                        quantity: 10
                    }
                ]
            }
        }
    });
    console.log(purchaseCreated);
}

// Función para consultar una Purchase
const queryPurchase = async () => {
    const purchase = await prisma.purchase.findMany({
        include: {
            supplier: true,
            items: {
                include: {
                    item: true
                }
            }
        },  
        where: {
            id: 1  // Especifica el criterio de búsqueda (busca la Purchase con id 1).
        }
    });
    console.log(purchase);
}

// Función para actualizar una Purchase
const updatePurchase = async () => {
    const purchaseUpdated = await prisma.purchase.update({
        data: {
            date: new Date()
        },
        where: {
            id: 1
        }
    });
    console.log(purchaseUpdated);
}

// Función para eliminar una Purchase
const deletePurchase = async () => {
    const purchaseDeleted = await prisma.purchase.delete({
        where: {
            id: 1
        }
    });
    console.log(purchaseDeleted);
}
/* Llamadas a funciones para evitar su ejecución automática.
// createSupplier();
// createItem();
// createPurchase();
// queryPurchase();
// updatePurchase();
// deletePurchase();
*/
