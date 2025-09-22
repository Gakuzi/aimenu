import React, { useState, useEffect } from 'react';
import { Screen } from '../types';
import { auth, db } from '../api/firebase';
import { signOut } from 'firebase/auth';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

interface SettingsScreenProps {
    setScreen: (screen: Screen) => void;
}

const SettingsScreen: React.FC<SettingsScreenProps> = ({ setScreen }) => {
    const [formData, setFormData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        const fetchUserData = async () => {
            if (auth.currentUser) {
                setLoading(true);
                const userDocRef = doc(db, "users", auth.currentUser.uid);
                const userDocSnap = await getDoc(userDocRef);
                if (userDocSnap.exists()) {
                    setFormData(userDocSnap.data());
                }
                setLoading(false);
            }
        };
        fetchUserData();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSaveChanges = async () => {
        if (auth.currentUser) {
            setSaving(true);
            try {
                const userDocRef = doc(db, "users", auth.currentUser.uid);
                await updateDoc(userDocRef, formData);
                alert("Настройки сохранены!");
            } catch (error) {
                console.error("Ошибка сохранения настроек:", error);
                alert("Не удалось сохранить настройки.");
            } finally {
                setSaving(false);
            }
        }
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
            // onAuthStateChanged in App.tsx will handle the screen change
        } catch (error) {
            console.error("Ошибка выхода:", error);
        }
    };

    const handleResetSetup = async () => {
        if (auth.currentUser && window.confirm("Вы уверены, что хотите сбросить все настройки и начать заново?")) {
            try {
                const userDocRef = doc(db, "users", auth.currentUser.uid);
                await updateDoc(userDocRef, { setupComplete: false });
                setScreen('setup');
            } catch (error) {
                console.error("Ошибка сброса настроек:", error);
            }
        }
    };

    if (loading) {
        return <div className="screen">Загрузка настроек...</div>;
    }

    if (!formData) {
        return <div className="screen">Не удалось загрузить настройки.</div>;
    }

    return (
        <div className="screen active" id="settings-screen">
            <header className="recipe-header">
                <button className="back-button" onClick={() => setScreen('main')}>&larr; Назад</button>
                <h2 id="settings-title">Настройки</h2>
            </header>
            <div id="settings-content">
                <div className="settings-section">
                    <h3 className="settings-title">Основные настройки</h3>
                    <div className="settings-form-group">
                        <label htmlFor="apiKey">Google Gemini API Ключ</label>
                        <input type="password" id="apiKey" name="apiKey" value={formData.apiKey} onChange={handleChange} />
                    </div>
                     <div className="settings-form-group">
                        <label htmlFor="familyName">Название семьи</label>
                        <input type="text" id="familyName" name="familyName" value={formData.familyName} onChange={handleChange} />
                    </div>
                </div>

                <div className="settings-section">
                    <h3 className="settings-title">Предпочтения</h3>
                    <div className="settings-form-group">
                        <label htmlFor="preferences">Общие предпочтения</label>
                        <textarea id="preferences" name="preferences" value={formData.preferences} onChange={handleChange} rows={3}></textarea>
                    </div>
                    <div className="settings-form-group">
                        <label htmlFor="dietaryRestrictions">Диетические ограничения</label>
                        <textarea id="dietaryRestrictions" name="dietaryRestrictions" value={formData.dietaryRestrictions} onChange={handleChange} rows={3}></textarea>
                    </div>
                    <div className="settings-form-group">
                        <label htmlFor="kitchenAppliances">Кухонная техника</label>
                        <textarea id="kitchenAppliances" name="kitchenAppliances" value={formData.kitchenAppliances} onChange={handleChange} rows={3}></textarea>
                    </div>
                </div>

                <button onClick={handleSaveChanges} className="primary-button" disabled={saving}>
                    {saving ? 'Сохранение...' : 'Сохранить изменения'}
                </button>

                <div className="settings-section" style={{marginTop: '20px'}}>
                     <h3 className="settings-title" style={{color: 'var(--danger-color)'}}>Опасная зона</h3>
                     <button onClick={handleLogout} className="secondary-button" style={{marginBottom: '10px'}}>Выйти из аккаунта</button>
                     <button onClick={handleResetSetup} className="danger-button">Сбросить настройки и начать заново</button>
                </div>
            </div>
        </div>
    );
};

export default SettingsScreen;
