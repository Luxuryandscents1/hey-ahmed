"use client"
import { useCart } from "@/store/cart"
import { useState } from "react"

export function CartDrawer() {
  const [open, setOpen] = useState(false)
  const { items, removeItem, updateQty, total, count, clear } = useCart()

  return (
    <>
      <button onClick={() => setOpen(true)} className="relative bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-sm font-medium px-4 py-2 rounded-full hover:opacity-90 transition">
        Cart {count() > 0 && <span className="ml-1 bg-blue-600 text-white text-xs px-1.5 py-0.5 rounded-full">{count()}</span>}
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
          <div className="relative w-full max-w-md bg-white dark:bg-zinc-900 h-full shadow-2xl flex flex-col">
            <div className="flex items-center justify-between p-6 border-b border-zinc-200 dark:border-zinc-800">
              <h2 className="text-lg font-bold">Your Cart ({count()})</h2>
              <button onClick={() => setOpen(false)} className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white text-xl">✕</button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {items.length === 0 && <p className="text-zinc-500 text-center mt-12">Your cart is empty</p>}
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 border border-zinc-200 dark:border-zinc-800 rounded-xl p-3">
                  <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover" />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm truncate">{item.name}</h4>
                    <p className="text-sm font-bold mt-1">${item.price.toFixed(2)}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button onClick={() => updateQty(item.id, item.quantity - 1)} className="w-6 h-6 rounded bg-zinc-100 dark:bg-zinc-800 text-xs font-bold">−</button>
                      <span className="text-sm">{item.quantity}</span>
                      <button onClick={() => updateQty(item.id, item.quantity + 1)} className="w-6 h-6 rounded bg-zinc-100 dark:bg-zinc-800 text-xs font-bold">+</button>
                      <button onClick={() => removeItem(item.id)} className="ml-auto text-red-500 text-xs">Remove</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {items.length > 0 && (
              <div className="p-6 border-t border-zinc-200 dark:border-zinc-800 space-y-3">
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>${total().toFixed(2)}</span>
                </div>
                <button className="w-full bg-blue-600 text-white font-medium py-3 rounded-full hover:bg-blue-700 transition">Checkout</button>
                <button onClick={() => clear()} className="w-full text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition">Clear Cart</button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
