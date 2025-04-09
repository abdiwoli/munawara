#!/bin/bash
# update_chatbot.sh - Script to update chatbot responses from a database or API

echo "Updating chatbot responses..."
python3 /mnt/c/Users/musha/Munawara/ai/chatbot/update_chatbot.py

if [ $? -eq 0 ]; then
    echo "Chatbot updated successfully!"
else
    echo "Chatbot update failed! Check logs."
fi
